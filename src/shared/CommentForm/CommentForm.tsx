import React, {useEffect, useRef} from 'react';
import styles from './commentform.css';
import {useFormik} from "formik";
import {validate} from "./ValidateCommentForm";

interface ICommentFormProps {
  author?: string
}

export function CommentForm({author}:ICommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(()=>{
    if(ref.current){
      ref.current.focus();
      ref.current.selectionStart = ref.current.value.length;
      ref.current.selectionEnd = ref.current.value.length;
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      comment:author ? author + ', ': '',
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      alert('Форма отправлена');
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea
        name="comment"
        ref={ref}
        className={styles.input}
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        aria-invalid={formik.errors.comment? 'true': undefined}
      />
      {formik.errors.comment && (<div>{formik.errors.comment}</div>)}
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
