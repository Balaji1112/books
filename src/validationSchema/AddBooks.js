import * as yup from "yup";

export const addBooksValidation = yup.object({
  author: yup.string().trim().required("Author is required"),
  country: yup.string().trim().required("Country is required"),
  language: yup.string().trim().required("Language is required"),
  link: yup.string().trim().required("Link is required"),
  pages: yup.string().trim().required("Pages is required"),
  title: yup.string().trim().required("Title is required"),
  year: yup.string().trim().required("Year is required"),
});
