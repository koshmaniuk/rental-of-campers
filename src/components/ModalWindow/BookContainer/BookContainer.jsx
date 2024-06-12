import css from "./BookContainer.module.css";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  bookingDate: yup.date().required("Required").nullable(),
  comment: yup.string(),
});

const BookContainer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={css.bookContainer}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            className={css.inputField}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className={css.inputField}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="bookingDate"></label>
          <Controller
            control={control}
            name="bookingDate"
            render={({ field }) => (
              <DatePicker
                placeholderText="Booking date"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="yyyy/MM/dd"
                className={css.calendarField}
              />
            )}
          />
          {errors.bookingDate && <p>{errors.bookingDate.message}</p>}
        </div>
        <div>
          <label htmlFor="comment"></label>
          <textarea
            id="comment"
            {...register("comment")}
            placeholder="Comment"
            className={css.inputCommentField}
          ></textarea>
        </div>
        <button type="submit" className={css.formBtn}>
          Send
        </button>
      </form>
    </div>
  );
};
export default BookContainer;
