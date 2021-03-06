import React, { useContext, useState } from 'react'
import coca from '../assets/img/coca.png'
//import grandpa from '../assets/img/tiger-1.png'
// import grandma from '../assets/img/tiger-2.png'
// import father from '../assets/img/tiger-3.png'
// import mother from '../assets/img/tiger-4.png'
// import sister from '../assets/img/tiger-5.png'
// import brother from '../assets/img/tiger-6.png'
import grandpa from '../assets/img/tiger-grandpa.png'
import grandma from '../assets/img/tiger-grandma.png'
import father from '../assets/img/tiger-father.png'
import mother from '../assets/img/tiger-mother.png'
import sister from '../assets/img/tiger-sister.png'
import brother from '../assets/img/tiger-brother.png'
import flower from '../assets/img/flower.png'
import flame1 from '../assets/img/flame-1.png'
import flame2 from '../assets/img/flame-2.png'
import { useNavigate } from 'react-router-dom'
import RouteContext from '../_helpers/routeContext'
import { generateInviteLink } from '../_helpers/cloudFunctions'
import UserContext from '../_helpers/userContext'
import Popup from 'reactjs-popup';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Loader from 'react-loader-spinner'


function PlayersPage() {
    let navigate = useNavigate()
    const { path } = useContext(RouteContext)
    const { user } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const toggleModal = (state) => setOpen(state);

    return (
        <div className="page players fl-col align-center">
            <img src={coca} alt="" className="coca-img" />
            <h2 className="players__header">Pick a loved one to play!</h2>
            <div className="fl-col align-center w-full round-table">
                <div className="row row--1">
                    <div onClick={() => generateLink('Grandpa')} className="tiger tiger--1">
                        <img src={grandpa} alt="" className="tiger__img" />
                    </div>
                    <div onClick={() => generateLink('Grandma')} className="tiger tiger--2">
                        <img src={grandma} alt="" className="tiger__img" />
                    </div>
                </div>
                <div className="row row--2">
                    <div onClick={() => generateLink('Dad')} className="tiger tiger--3">
                        <img src={father} alt="" className="tiger__img" />
                    </div>
                    <div onClick={() => generateLink('Mum')} className="tiger tiger--4">
                        <img src={mother} alt="" className="tiger__img" />
                    </div>
                </div>
                <div className="row row--3">
                    <div onClick={() => generateLink('Brother')} className="tiger tiger--5">
                        <img src={brother} alt="" className="tiger__img" />
                    </div>
                    <div onClick={() => generateLink('Sister')} className="tiger tiger--6">
                        <img src={sister} alt="" className="tiger__img" />
                    </div>
                </div>
            </div>
            <img src={flower} alt="" className="floating-img floating-img--1" />
            <img src={flower} alt="" className="floating-img floating-img--2" />
            <img src={flower} alt="" className="floating-img floating-img--3" />
            <img src={flower} alt="" className="floating-img floating-img--4" />
            <img src={flame1} alt="" className="floating-img floating-img--5" />
            <img src={flame2} alt="" className="floating-img floating-img--6" />


            <Popup open={open} closeOnDocumentClick={false} onClose={() => toggleModal(false)}>
                <div className="modal">
                    <Loader
                        type="TailSpin"
                        color="#FEFEFE"
                        height={40}
                        width={40}
                    />
                    <span className="modal__text">Loading...</span>
                </div>
            </Popup>
            <ToastContainer autoClose={4500} theme="dark" transition={Slide} />
        </div>
    )

    function generateLink(relation) {
        if (path?.via === 'TOGETHER') {
            navigate(`/game`,
            {
                state: {
                    relation
                }
            })
            return;
        }
        toggleModal(true)
        generateInviteLink(user, relation)
            .then(res => {
                let { linkId } = res.data;
                const {host: url, protocol} = window.location
                // TODO
                // link url has to be changed to utilily file url
                const link = `${protocol}//${url}/?invite=${linkId}`
                navigate(`/links`, {
                    state: {
                        link
                    }
                })
            })
            .catch(e => {
                console.log(e)
                toggleModal(false)
                toast("Error occured! Please try again.", {
                    position: "bottom-center",
                    autoClose: 4500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            })


    }
}

export default PlayersPage
