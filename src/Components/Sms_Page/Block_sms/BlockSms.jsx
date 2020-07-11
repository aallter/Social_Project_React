import React from 'react';
import block_sms from './BlockSms.module.css';
import OneSms from '../sms_one/sms_one';

const BlockSms = () => {
    return(
        <div className={block_sms.blockForSms}>
            <div className={block_sms.MessageInput}>
                <OneSms/>
                <input type="text" plaseholder="Your message" name="message"/>
                <input type="submit" value="Send"/>
            </div>
        </div>
    );
}

export default BlockSms;