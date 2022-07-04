import Image from "next/image";

export default function SubscribeForm(){
    return(
        <>
            <div id="mc_embed_signup">
            <form action="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&amp;id=3d210216fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group flex flex">
                <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
                <div id="mce-responses" className="clear foot">
                    <div className="response hidden" id="mce-error-response" ></div>
                    <div className="response hidden" id="mce-success-response" ></div>
                </div> 
                <div  aria-hidden="true"><input type="text" name="b_e8ad586d39179304b2aeb71c6_3d210216fb" tabindex="-1" value="" /></div>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                            {/* <p className="brandingLogo"><a href="http://eepurl.com/h4bzp5" title="Mailchimp - email marketing made easy and fun"><Image src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" width={"120px"} height={"70px"} /></a></p> */}
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}