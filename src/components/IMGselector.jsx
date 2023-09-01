import {useState} from 'react'

const IMGselector = ({imgs, setImgs}) => {

    const [src, setSrc] = useState("/assets/ADD.svg")

  return (
    <div className='add-image-container'>

        <input className='file-input' type="file" name="image" id="file-image" accept="image/png, image/jpeg" onChange={(e) => {
        if (e.target.files[0]) {         
            const srcI = URL.createObjectURL(e.target.files[0]);
            setSrc(srcI)
            setImgs([...imgs, e.target.files[0].name])
        }
        

        }}/>

         <img className='file-image' src={src} alt="" style={src === "/assets/ADD.svg" ? {padding: "5%"} : {padding: "0"}}/>
    </div>
  )
}

export default IMGselector