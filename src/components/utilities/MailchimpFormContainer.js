import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = `https://camrosefcss.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

const SimpleForm = () => <MailchimpSubscribe url={url}/>

export default SimpleForm;