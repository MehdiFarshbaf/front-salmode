import styles from './Login.module.scss'
import backgroundImage from '../../assets/images/backgrounLogin.png'
import OtpInput from 'react-otp-input';
import {useState} from "react";
import Timer from "../../components/Timer/Timer";

const Login = () => {

    const [sendAgain, setSendAgain] = useState(false)
    const [step2, setStep] = useState(false)
    const [otp, setOtp] = useState('');

    return (
        <section className={styles.login}>
            <img src={backgroundImage} alt=""/>
            <div className='inside'>
                <div className={styles.insideLogin}>
                    <div className={styles.card}>
                        <p className={styles.title}>{!step2 ? 'ورود' : 'تایید کد'}</p>
                        <p className={styles.description}>{!step2 ? 'شماره موبایل خود را وارد کنید' : 'کد 6 رقمی ارسال شده به موبایلتان را وارد کنید'}</p>
                        {!step2 ? <input type="number" className='formInput' placeholder='شماره موبایل'/> :
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6} shouldAutoFocus={true} inputType='number'
                                containerStyle={styles.containerOTP}
                                inputStyle={styles.inputOTP}
                                renderInput={(props) => <input {...props} />}
                            />
                        }
                        {step2 && <Timer/>}
                        <button className='formButton'
                                onClick={() => setStep(true)}>{!step2 ? 'ورود' : 'تایید'}</button>
                        <p className={styles.ruleText}>با ورود شما قوانین و شرایط استفاده از سرویس های سایت سال مد را
                            پذیرفته اید.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login