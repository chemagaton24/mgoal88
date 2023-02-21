import { useMediaQuery } from '../../../../utils/useMediaQuery'
import Modules from '..'
import Container from '../../../containers'
import LogoMgoal88 from '../../../../assets/images/logos/mgoal88-white.svg'
import './style.css'
import Modal from '../../../modal'

const DesktopLayout = () => {
    return (
        <div className="table-layout">
            <div className="row">
                <div className="col col-1">
                    <div className="cover-tagline-area theme-dark-blue flex flex-direction-col flex-col-expand g-row-32">
                        <div className="row bg flex-grow"></div>
                        <div className="row">
                            <div className="row m-b-24">
                                <img src={LogoMgoal88} className="logo-img" alt="mgoal88 logo" />
                            </div>
                            <h4 className="tagline">JOIN THE BEST SOURCE FOR SPORTS NEWS AND ODDS</h4>
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <Modal.Parts.Header title="REGISTER TO MGOAL88!" />
                    <Modal.Parts.Body>
                        <Modules.Form />
                    </Modal.Parts.Body>
                </div>
            </div>
        </div>
    )
}

const TabletBelowLayout = () => {
    return (<>
        <Modal.Parts.Header title="REGISTER TO MGOAL88!" />
        <Modal.Parts.Body>
            <div className="cover-tagline-area theme-dark-blue bg flex">
                <div className="inner">
                    <div className="row m-b-8">
                        <img src={LogoMgoal88} className="logo-img" alt="mgoal88 logo" />
                    </div>
                    <h4 className="tagline">JOIN THE BEST SOURCE FOR SPORTS NEWS AND ODDS</h4>
                </div>
            </div>
            <div className="row">
                <Modules.Form />
            </div>
        </Modal.Parts.Body>
    </>)
}

const ModalRegister = () => {
    const mq = useMediaQuery([
        {
            match: '(min-width: 1024px)',
            returnTrue: 'desktop'
        }, {
            match: '(max-width: 1023px)',
            returnTrue: 'tablet-below'
        }
    ])
    return (
        <Modal.Parts.Master stateName="register">
            <Container.Module name="modal-register" kind="modal">
                {mq.includes('desktop') &&
                    <DesktopLayout />
                }
                {mq.includes('tablet-below') &&
                    <TabletBelowLayout />
                }
            </Container.Module>
        </Modal.Parts.Master>
    )
}

export default ModalRegister