import * as React from "react";

interface CreationForm {
  onSubmit: (item: any) => void;
}

const CardsCreationForm: React.FC<CreationForm> = ({ onSubmit }) => {
  const [gender, setGender] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const [imageUrl, setImageUrl] = React.useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSubmit({gender, title, price, imageUrl});
    setGender('');
    setTitle('');
    setPrice('');
    setImageUrl('');
  }

  return (<div>
    <form>
      <input type="text" value={gender} placeholder="Gender" onChange={(e) => setGender(e.target.value)}/>
      <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
      <input type="text" value={imageUrl} placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)}/>
      <input type="submit" value="Submit" onClick={handleSubmit}/>
    </form>
  </div>);
}

export default CardsCreationForm;