import React from 'react';
import DialogsFriend from './dialogsFriend/dialogFriend';
import BlockSms from './Block_sms/BlockSms';

const SmsPage = (props) => {

    return(
        <div>
            <DialogsFriend arr_dialog_friend={props.arr_dialog_friend}/>
            <BlockSms arr_sms_one={props.arr_sms_one}/>
        </div>
    );
}

export default SmsPage;