import { useForm } from "react-hook-form";
import "./index.css";
import { addBooksValidation } from "../../validationSchema/AddBooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditBooks() {
  const data = useSelector((state) => state.books.value);
  const navigate = useNavigate();
  const urlid = useParams();
  console.log(urlid.id, "id");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addBooksValidation),
    mode: "onTouched",
    defaultValues: {
      author: "",
      country: "",
      language: "",
      link: "",
      pages: "",
      title: "",
      year: "",
    },
  });
  console.log(errors, "errors");

  async function onSubmit(data) {
    data.id = urlid.id;
    try {
      await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${urlid.id}`,
        data
      );
    } catch (error) {
      console.log(error.message);
    }
    navigate("/books");
  }
  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <div className="maindiv">
      <div className="formdiv">
        <h2>Edit Book</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flexdiv">
            <div>
              <label htmlFor="author">Author</label>
              <input id="author" {...register("author")} />
              {errors.author && (
                <span className="error">{errors.author.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input id="country" {...register("country")} />
              {errors.country && (
                <span className="error">{errors.country.message}</span>
              )}
            </div>
          </div>
          <div className="flexdiv">
            <div>
              <label htmlFor="language">Language</label>
              <input id="language" {...register("language")} />
              {errors.language && (
                <span className="error">{errors.language.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="link">Link</label>
              <input id="link" {...register("link")} />
              {errors.link && (
                <span className="error">{errors.link.message}</span>
              )}
            </div>
          </div>
          <div className="flexdiv">
            <div>
              <label htmlFor="pages">Pages</label>
              <input id="pages" {...register("pages")} />
              {errors.pages && (
                <span className="error">{errors.pages.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input id="title" {...register("title")} />
              {errors.title && (
                <span className="error">{errors.title.message}</span>
              )}
            </div>
          </div>
          <label htmlFor="year">Year</label>
          <input id="year" {...register("year")} />
          {errors.year && <span className="error">{errors.year.message}</span>}
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBooks;
