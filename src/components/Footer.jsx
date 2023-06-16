import facebook from "../assets/1facebook.png";
import blockchain from "../assets/Blockchain 1.png";
import telegram from "../assets/telegram 4.png";
import twitter from "../assets/twitter.png";

const Footer = () => (
    <div>
        <div className="bg-white flex justify-between md:justify-center items-center">
            <div className="flex flex-col flex-1 md:pr-20 md:pl-24 pr-0 pl-6">
                <div className="font-bold text-5xl py-24">Future Kids</div>
                <div className="text-2xl leading-7">
                    <p className="mx-2">
                        Join our mailing list to stay in the loop <br />
                        with our newest NFTs by{" "}
                        <a className="font-bold text-indigo-400" href="">
                            Future Kids.
                        </a>
                    </p>
                </div>
                <div className="flex pt-8">
                    <input
                        type="text"
                        className="bg-slate-200 rounded-lg flex-4 mr-8"
                    />

                    <a className="" href="">
                        Sign up
                    </a>
                </div>
                <div className="flex items-center mt-16">
                    <p className="text-xl mr-3.5">Contact us</p>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
            <div className="md:w-auto w-0">
                <img src={blockchain} alt="" />
            </div>
        </div>
        <div className="bg-white flex items-center justify-center p-4">
            &copy; Future Kids | All Rights Reserved
        </div>
    </div>
);

export default Footer;
