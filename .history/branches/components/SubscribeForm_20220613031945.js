import Image from "next/image";

export default function SubscribeForm(){
    return(
        <>
            <div id="mc_embed_signup">
            <form action="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&amp;id=3d210216fb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
            </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div> 
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8ad586d39179304b2aeb71c6_3d210216fb" tabindex="-1" value="" /></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                            <p class="brandingLogo"><a href="http://eepurl.com/h4bzp5" title="Mailchimp - email marketing made easy and fun"><Image src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" width={} /></a></p>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}