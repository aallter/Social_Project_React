import React from 'react';
import DialogsFriend from './dialogsFriend/dialogFriend';
import BlockSms from './Block_sms/BlockSms';

const SmsPage = () => {
    return(
        <div>
            <DialogsFriend/>
            <BlockSms/>
        </div>
    );
}

export default SmsPage;