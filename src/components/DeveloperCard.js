import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class DeveloperCard extends Component {

    render() {
        return (
            <div id={"developerCard-" + this.props.info.id} className="developerCard">
                <div className={this.props.info.firstName + "-" + this.props.info.lastName + " imageHolder"}></div>
                <div className="infoContainer">
                    <h3>{this.props.info.firstName + " " + this.props.info.lastName}</h3>
                    <p>{this.props.info.reelThemIn}</p>
                    <div className="iconAndButtonSection">
                        <div className="cardIconRow">
                            <a href={this.props.info.portfolio} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faGlobe} /></a>
                            <a href={this.props.info.github} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faGithub} /></a>
                            <a href={this.props.info.linkedIn} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faLinkedin} /></a>
                            <a href={"mailto: " + this.props.info.email} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faEnvelope} /></a>
                        </div>
                        <div className="modalButton" onClick={() => this.props.openModal("modal-" + this.props.info.id)}>Learn More</div>
                        <div id={"modal-" + this.props.info.id} className="modal">

                            <div className="modal-content">
                                <div className="modalHeader">
                                    <div className="modalTitle">{this.props.info.firstName} {this.props.info.lastName}</div>
                                    <div id={"modalClose-" + this.props.info.id} className="close" onClick={() => this.props.closeModalFromButton("modal-" + this.props.info.id)}>&times;</div>
                                </div>
                                <div className="modalBody">
                                    <div className="imageAndLinks">
                                        <div className={this.props.info.firstName + "-" + this.props.info.lastName + " imageHolder smallImage"}></div>
                                        <div className="cardIconRow smallIconRow">
                                            <a href={this.props.info.portfolio} target={'_blank'}><FontAwesomeIcon size={'3x'} icon={faGlobe} /></a>
                                            <a href={this.props.info.github} target={'_blank'}><FontAwesomeIcon size={'3x'} icon={faGithub} /></a>
                                            <a href={this.props.info.linkedIn} target={'_blank'}><FontAwesomeIcon size={'3x'} icon={faLinkedin} /></a>
                                            <a href={"mailto: " + this.props.info.email} target={'_blank'}><FontAwesomeIcon size={'3x'} icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                    <div className="bio">
                                        {this.props.info.bio}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DeveloperCard