import * as React from "react";
import styles from "./creationForm.module.scss";

interface CreationForm {
  onSubmit: (item: any) => void;
}

interface Validation {
  gender?: string;
  title?: string;
  price?: string;
  imageUrl?: string;
  ok?: boolean;
}

const CardsCreationForm: React.FC<CreationForm> = ({
  onSubmit,
}: CreationForm) => {
  const [gender, setGender] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [error, setError] = React.useState<Validation>({});
  const genderRef = React.useRef<HTMLLabelElement>();
  const titleRef = React.useRef<HTMLLabelElement>();
  const priceRef = React.useRef<HTMLLabelElement>();
  const imageUrlRef = React.useRef<HTMLLabelElement>();

  const scrollIfNeeded = (validation: Validation) => {
    let view;
    if (validation.gender) {
      view = genderRef.current;
    } else if (validation.title) {
      view = titleRef.current;
    } else if (validation.price) {
      view = priceRef.current;
    } else if (validation.imageUrl) {
      view = imageUrlRef.current;
    }
    view?.scrollIntoView();
  };

  const validateInputs = () => {
    const validation: Validation = {};
    validation.gender = gender ? "" : `this field is required`;

    validation.title = title ? "" : `this field is required`;
    validation.price = price ? "" : `this field is required`;
    validation.imageUrl = imageUrl ? "" : `this field is required`;
    validation.ok = !!(gender && title && price && imageUrl);
    return validation;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const validation = validateInputs();
    setError(validation);
    if (validation.ok) {
      onSubmit({ gender, title, price, imageUrl });
      setGender("");
      setTitle("");
      setPrice("");
      setImageUrl("");
    } else {
      scrollIfNeeded(validation);
    }
  };

  return (
    <div>
      <form className={styles.styledForm}>
        <label ref={genderRef}>
          <span>Gender</span>
          <input
            id="gender"
            type="text"
            value={gender}
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <span>{error.gender}</span>
        </label>
        <label ref={titleRef}>
          <span>Title</span>
          <input
            id="title"
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>{error.title}</span>
        </label>
        <label ref={priceRef}>
          <span>Price</span>
          <input
            id="price"
            type="text"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <span>{error.price}</span>
        </label>
        <label ref={imageUrlRef}>
          <span>Image URL</span>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            placeholder="Image URL"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <span>{error.imageUrl}</span>
        </label>
        <input
          className={styles.submitButton}
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default CardsCreationForm;
