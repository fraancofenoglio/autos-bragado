
const IMGselector = ({num, setFiles, files, src, setSrc}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className='add-image-container'>

        <input num={num} className='file-input' type="file" name="image" id="file-image" accept="image/png, image/jpeg" onChange={(e) => {
            if (e.target.files[0]) {   
            const filter = files.filter(file => {
                if(file.id !== num){
                    return file
                }
                return files // esto va?
            })
  
            const srcI = URL.createObjectURL(e.target.files[0]);
            setSrc(srcI)
            setFiles([...filter, {file: e.target.files[0], id: num}])
            handleSubmit(e)
 
        }
        

        }}/>

         <img className='file-image' src={src} alt="" style={src === "/assets/ADD.svg" ? {padding: "5%"} : {padding: "0"}}/>
    </form>
  )
}

export default IMGselector