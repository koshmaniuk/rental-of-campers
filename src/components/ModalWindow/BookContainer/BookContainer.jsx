import { useState } from "react";
import css from "./BookContainer.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обробка даних форми
    console.log({ name, email, bookingDate, comment });
  };
  return (
    <div className={css.bookContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bookingDate">Booking Date:</label>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default BookContainer;
