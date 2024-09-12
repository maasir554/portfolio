import { CONTACT } from "../constants";

export const Contact = () => (
    <div className="border-b border-neutral-800 pb-20">
        <h1 className="my-10 text-4xl text-center">
            Get in touch
        </h1>
        <div className="text-center tracking-tighter">
            <p className="my-4"> {CONTACT.address} </p>
            <a href={"tel:"+CONTACT.phoneNo} className="my-4 block">  {CONTACT.phoneNo} </a>
            <a href={"mailto:"+CONTACT.email} className="block underline"> {CONTACT.email}</a>
                
               

           
        </div>
    </div>
)