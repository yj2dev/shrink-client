import Modal from "../Modal";
import { Container } from "./styled";

const ProfileImgModal = ({onUploadFile, onHandleFile, show, onClose}) => {
    if(!show){
        return null;
    }
    return (
            <Container>
                <Modal show={show} onClose={onClose}>
                <form action="" method="post" enctype="multipart/form-data">
                    <div className="file-wrap">
                    <label for="fileInput" className="img-select">이미지 선택</label>
                    <input 
                        type="file" 
                        id="fileInput"
                        name="fileInput" 
                        accept=".jpg, .jpeg, .png" 
                        required
                        onChange={onHandleFile}
                    />
                    <button 
                        type="submit" 
                        className="img-select"
                        onClick={onUploadFile}
                    >업로드</button>
                    </div>
                </form>
                </Modal>
            </Container>
        );
    
}

export default ProfileImgModal;