"use client"
import { Close } from "@/components/Icons/page"
import { Button } from "@/components/Button/page"
import Link from "next/link"
import useUser from "@/hooks/useUser"
import { useState, useEffect, useMemo, useRef } from "react"
import { addPost, uploadImage, fetchCategories } from "@/firebase/client"
import { useRouter } from "next/navigation"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Category from "@/components/Category/page"

const initValues = {
  title: "",
  description: "",
  content: "",
  categories: "",
}

const STATE_PROCESSES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const IMAGE_STATES = {
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
  ERROR: -1,
}

const initState = { values: initValues }

export default function Crear() {
  const [state, setState] = useState(initState)
  const [status, setStatus] = useState(STATE_PROCESSES.USER_NOT_KNOWN)
  const [imageStatus, setImageStatus] = useState(IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)
  const [categories, setCategories] = useState([])

  const user = useUser()
  const router = useRouter()
  const quillRef = useRef()

  useEffect(() => {
    fetchCategories().then(setCategories)
  }, [])

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
          ["code-block"],
        ],
        handlers: {
          image: function () {
            const input = document.createElement("input")
            input.setAttribute("type", "file")
            input.setAttribute("accept", "image/*")
            input.click()

            input.onchange = async () => {
              const file = input.files[0]
              const task = uploadImage(file)
              console.log(task)
              setTask(task)
            }
          },
        },
      },
    }),
    []
  )

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
  ]

  useEffect(() => {
    if (task) {
      const onProgress = () => {
        setImageStatus(IMAGE_STATES.UPLOADING)
      }
      const onError = () => {
        setImageStatus(IMAGE_STATES.ERROR)
      }
      const onComplete = () => {
        console.log("onComplete")
        task.snapshot.ref.getDownloadURL().then((url) => {
          setImgURL(url)
          setImageStatus(IMAGE_STATES.COMPLETE)
        })
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

  useEffect(() => {
    if (imageStatus === IMAGE_STATES.COMPLETE && imgURL) {
      const editor = quillRef.current.getEditor()
      editor.insertEmbed(editor.getSelection(), "image", imgURL)
      console.log(imgURL)
    }
  }, [imageStatus, imgURL])

  const { values } = state

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(STATE_PROCESSES.LOADING)
    addPost({
      avatar: user.avatar,
      title: values.title,
      description: values.description,
      content: values.content,
      categories: values.categories,
      userId: user.uid,
      username: user.username,
      likesCount: 0,
      img: imgURL,
    })
      .then(() => {
        router.push("/")
      })
      .catch((err) => {
        console.log(err)
        setStatus(STATE_PROCESSES.ERROR)
      })
  }

  const renderImageUploadStatus = () => {
    if (imageStatus === IMAGE_STATES.UPLOADING) {
      return <div>Cargando imagen...</div>
    }
    return null
  }

  const isDisabled =
    !values.title.length ||
    !values.content.length ||
    !values.description.length ||
    status === STATE_PROCESSES.LOADING

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50">
      <div className="h-16 bg-white">
        <div className="flex items-center justify-between h-full w-[90%] mx-auto">
          <Link href="/">
            <Close className="w-6 h-6" fill="#155E75" />
          </Link>
          <Button disabled={isDisabled}>Publicar</Button>
        </div>
      </div>
      <div className="h-full">
        <div className="grid grid-cols-1 gap-1 w-[90%] mx-auto pt-8 pb-28">
          <p className="text-[#888888] text-base p-2">
            Titulo
            <span className="text-[#FF0000] ml-2">*</span>
          </p>
          <input
            type="text"
            placeholder="Regla de la cadena para funciones trigonométricas compuestas..."
            value={values.title}
            name="title"
            onChange={handleChange}
            className="w-full border h-10 border-[#CCCCCC] px-4 focus:outline-none appearance-none bg-transparent"
          />
          <p className="text-[#888888] text-base p-2">
            Descripción
            <span className="text-[#FF0000] ml-2">*</span>
          </p>
          <textarea
            placeholder="La regla de la cadena es utilizada cuando tenemos una función compuesta de dos o más funciones. En lugar de aplicar todas las técnicas de diferenciación a cada parte de la función, la regla de la cadena nos permite simplificar el proceso..."
            value={values.description}
            name="description"
            onChange={handleChange}
            className="w-full border h-20 border-[#CCCCCC] px-4 py-3 focus:outline-none appearance-none bg-transparent"
          />

          <p className="text-[#888888] text-base p-2">
            Contenido
            <span className="text-[#FF0000] ml-2">*</span>
          </p>
          {renderImageUploadStatus()}
          <ReactQuill
            theme="snow"
            ref={quillRef}
            value={values.content}
            modules={modules}
            formats={formats}
            className="h-52 pb-12"
            onChange={(value) => {
              handleChange({ target: { name: "content", value } })
            }}
          />
          <fieldset className="p-0">
            <legend className="text-[#888888] text-base p-2">
              Categoria
              <span className="text-[#FF0000] ml-2">*</span>
            </legend>
            <div className="grid grid-cols-6 gap-2">
              {categories.map((item, index) => (
                <div
                  className="border-[#CCCCCC] border flex py-2 justify-center"
                  key={index}
                >
                  <input type="checkbox" name="categories" />
                  <label htmlFor="categories" className="ml-2">
                    {item.category}
                    <Category>{item.countPosts}</Category>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </form>
  )
}
