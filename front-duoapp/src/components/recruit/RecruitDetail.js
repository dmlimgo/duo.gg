import React from 'react';
import './RecruitDetail.scss';
import Emblem_Iron from '../../assets/icons/ranked-emblems/Emblem_Iron.png';
import Emblem_Bronze from '../../assets/icons/ranked-emblems/Emblem_Bronze.png';
import Emblem_Silver from '../../assets/icons/ranked-emblems/Emblem_Silver.png';
import Emblem_Gold from '../../assets/icons/ranked-emblems/Emblem_Gold.png';
import Emblem_Platinum from '../../assets/icons/ranked-emblems/Emblem_Platinum.png';
import Emblem_Diamond from '../../assets/icons/ranked-emblems/Emblem_Diamond.png';
import Emblem_Master from '../../assets/icons/ranked-emblems/Emblem_Master.png';
import Emblem_Grandmaster from '../../assets/icons/ranked-emblems/Emblem_Grandmaster.png';
import Emblem_Challenger from '../../assets/icons/ranked-emblems/Emblem_Challenger.png';
import { getEmblem } from './Recruit';

const RecruitDetail = () => {
    const modalHide = () => {
        document.querySelector('.detail__wrap').classList.remove('modal--show');
        document.querySelector('.detail__wrap').classList.add('modal--hide');
    }
    return (
        <div className="detail__wrap modal--hide">
            <div onClick={modalHide} className="modal__bg" />
            <div className="modal__box">
                <div className="row1">
                    <div className="emblem">
                        {getEmblem('BRONZE')}
                    </div>
                    <div className="row1__column2">
                        <div className="nickname">
                            <span>NICKNAME</span>
                        </div>
                        <div className="tier">
                            <span>TIER</span>
                        </div>
                        <div className="point">
                            <span>pooint</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default RecruitDetail;