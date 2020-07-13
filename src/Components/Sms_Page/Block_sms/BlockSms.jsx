import React from 'react';
import block_sms from './BlockSms.module.css';
import OneSms from '../sms_one/sms_one';

const BlockSms = (props) => {
    let linkSms = React.createRef();

    let addSms =() =>{
        let getSms = linkSms.current.value;
        alert(getSms);
    }
    return(
        <div className={block_sms.blockForSms}>
            <div className={block_sms.MessageInput}>
                <OneSms arr_sms_one={props.arr_sms_one}/>
                <textarea ref={linkSms} className={block_sms.textArea}></textarea>
                <input onClick={addSms} type="submit" value="Send"/>
            </div>
        </div>
    );
}

export default BlockSms;