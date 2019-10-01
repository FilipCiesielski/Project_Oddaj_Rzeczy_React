import React, {Component} from 'react';
import "./TeddyBearForm.scss"


const infoStep1 = (<>
    <h2>Ważne!</h2>
    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać</p>
</>)
const infoStep2 = (<>
    <h2>Ważne!</h2>
    <p>Wszystkie rzeczy do spakowania zapakuj w 60l worki. Dokładną instrukcję jak spakować worki dostaniesz <a
        href={""}>TUTAJ</a></p>
</>)
const infoStep3 = (<>
    <h2>Ważne!</h2>
    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować
        organizacje po ich lokalizacji bądź celu ich pomocy.</p>

</>)
const infoStep4 = (<>
    <h2>Ważne!</h2>
    <p>Podaj adres oraz odbiór terminu rzeczy.</p>

</>)

class TeddyBearForm extends Component {

    state = {
        valueFromRadio: null,
        valueFromOption: "",
        valueFromOptionCity:"",
        valueFromCheckbox:[],
        valueFromNameOrganisation:"",
        button:true,
        goToStep1: true,
        goToStep2: false,
        goToStep3: false,
        goToSteep4: false,
        counter:0,

        street:"",
        city:"",
        postcode:"",
        phone:"",
        date:"",
        time:'',
        message:"",
        errStreet:false,
        errCity:false,
        errPostcode:false,
        errPhone:false,
        errDate:false,
        errTime:false,
        errMessage:false,




    };
    handleOnChange = e => {

            this.setState({    [e.target.name]: e.target.value, valueFromOption: e.target.value,
                valueFromOptionCity: e.target.value,valueFromNameOrganisation:e.target.value,})
console.log(this.state.message)

    }
    handleOnChange1=(e)=>{
        if(e.target.checked==true && this.state.valueFromCheckbox.indexOf(e.target.value)==-1) {
            let arrayValue=this.state.valueFromCheckbox;
            arrayValue.push(e.target.value)

            this.setState({valueFromCheckbox: arrayValue})
                    }else if(e.target.checked === false && this.state.valueFromCheckbox.indexOf(e.target.value)>-1){
            let arrayValue=this.state.valueFromCheckbox;
            arrayValue.splice(arrayValue.indexOf(e.target.value), 1);
            this.setState({valueFromCheckbox:arrayValue});

        }
        if(this.state.valueFromCheckbox.length>0){
            this.setState({button:false})
        }else{this.setState({button:true})}

        }


    handleOnChangeRadio = e => {

        this.setState({
            valueFromRadio: e.target.value, counter:1})
    }
    handleButtonNext = () => {
        // if(this.state.counter==2 && this.state.valueFromCheckbox.length==0)
        this.setState({counter:this.state.counter+1})
        console.log(this.state.counter)


    }
    handleButtonPrev=()=>{
        this.setState({counter:this.state.counter-1})
        if(this.state.counter==2){this.setState({valueFromRadio:null,})}
    }
    handleOnSubmit=e=>{
        e.preventDefault()
        const streetReg =/^[a-zA-Z]{2,}$/i;
        const cityReg=/^[a-zA-Z]{2,}$/i;
        const postcodeReg = /[0-9]{2}-[0-9]{3}/g;
        const phoneReg = /^\+48\d{9}$/;
        const timeReg=/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;


        this.setState({
            formSend: false, errName: false, errEmail: false, errMessage: false
        });



        let {street,city,postcode,phone,date,time,message} = this.state;
        console.log(date)

        e.preventDefault();
        // if (streetReg.test(street) && cityReg.test(city) && postcodeReg.test(postcode) && phoneReg.test(phone) ) {
        //     this.setState({formSend: true})
        // } else {
        //     if (!nameReg.test(name)) {
        //         this.setState({errName: true,})
        //     }
        //     if (!mailReg.test(email)) {
        //         this.setState({errEmail: true})
        //     }
        //     if (message.length < 120) {
        //         this.setState({errMessage: true})
        //     }
        // }


    }

    render() {
               let valueFromRadio = this.state.valueFromRadio;
        console.log(valueFromRadio);
        let valueFromOption = this.state.valueFromOption;
        console.log(valueFromOption);
        let valueFromOptionCity=this.state.valueFromOptionCity;





        let goToStep1 = this.state.goToStep1;
        let goToStep2 = this.state.goToStep2;
        let goToStep3 = this.state.goToStep3;

        let step1 = <>
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep1}
                    </div>

                </div>

                <div className={"teddyBackground"}>
                    <span>Kro 1/4</span>
                    <div className={"stepsForm"}>
                        <h2>Zaznacz co chcesz oddać</h2>

                        <div className={"form"}>

                            <label className={"container1"}>

                                <input type={"radio"} value={"ubrania, które nadają się do ponownego użycia"}
                                       name={"radio"}
                                       onClick={this.handleOnChangeRadio}/>

                                <span className="checkmark"></span>
                                ubrania, które nadają się do ponownego użycia
                            </label>
                            <label className={"container1"}>

                                <input type={"radio"} value={"ubrania do wyrzucenia"} name={"radio"}
                                       onClick={this.handleOnChangeRadio}/>

                                <span className="checkmark"></span>
                                ubrania do wyrzucenia
                            </label>
                            <label className={"container1"}>

                                <input type={"radio"} value={"zabawki"} name={"radio"}
                                       onClick={this.handleOnChangeRadio}/>

                                <span className="checkmark"></span>
                                zabawki
                            </label>
                            <label className={"container1"}>

                                <input type={"radio"} value={"książki"} name={"radio"}
                                       onClick={this.handleOnChangeRadio}/>

                                <span className="checkmark"></span>
                                książki
                            </label>
                            <label className={"container1"}>

                                <input type={"radio"} value={"inne"} name={"radio"} className={"radio"}
                                       onClick={this.handleOnChangeRadio}/>

                                <span className="checkmark"></span>
                                inne
                            </label>

                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonNext} type={"button"} value='Dalej'/>
                        </div>
                    </div>

                </div>

            </section>

        </>;
        let step2 = <>
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep2}
                    </div>

                </div>

                <div className={"teddyBackground"}>
                    <span>Kro 2/4</span>
                    <div className={"stepsForm"}>
                        <h2>Podaj liczbę 60l worków, które spakowałeś/aś rzeczy:</h2>

                        <div className={"bags"}>
                            <p>Liczba 60L worków:</p>
                            <select value={this.state.valueFromOption} onChange={this.handleOnChange} >
                                <option value="" disabled hidden>-wybierz-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input onClick={this.handleButtonNext} type={"button"} value='Dalej'/>
                        </div>
                    </div>


                </div>

            </section>

        </>;
        let step3 = <>
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep3}
                    </div>

                </div>

                <div className={"teddyBackground"}>
                    <span>Kro 3/4</span>
                    <div className={"stepsForm"}>
                        <h2>Lokalizacja:</h2>

                        <div className={"bags"}>
                            <div className={"optionSelect"}>
                                <select value={this.state.valueFromOptionCity} onChange={this.handleOnChange}>
                                    <option value="" disabled hidden>wybierz</option>
                                    <option value="Poznań">Poznań</option>
                                    <option value="Warszawa">Warszawa</option>
                                    <option value="Kraków">Kraków</option>
                                    <option value="Wrocław">Wrocław</option>
                                    <option value="Katowice">Katowice</option>

                                </select>
                                <div className={"optionBrick"}>

                                    <h4>Komu chcesz pomóc?</h4>
                                    <div className={"brick"}>
                                        <div className={"go"}>
                                            <input onChange={this.handleOnChange1}   id="lists1" type="checkbox" value={"dzieciom"} name="lists"/>
                                            <label htmlFor="lists1">dzieciom</label>
                                            <input onChange={this.handleOnChange1}  id="lists2" type="checkbox" value={"samotnym matkom"} name="lists"/>
                                            <label htmlFor="lists2">samotnym matkom</label>
                                            <input onChange={this.handleOnChange1} id="lists3" type="checkbox" value={"bezdomnym"} name="list"/>
                                            <label htmlFor="lists3">bezdomnym</label>
                                            <input onChange={this.handleOnChange1} id="lists4" type="checkbox" value={"niepełnosprawnym"} name="lists"/>
                                            <label htmlFor="lists4">niepełnosprawnym</label>
                                            <input onChange={this.handleOnChange1} id="lists5" type="checkbox" value={"osobom starszym"} name="lists"/>
                                            <label htmlFor="lists5">osobom starszym</label>

                                        </div>


                                    </div>


                                </div>
                                <h4>Wpisz nazwę konkretnej organizacji(opcjonalnie)</h4>
                                <input onChange={this.handleOnChange}  value={this.state.valueFromNameOrganisation} type={"text"} name={"organisation"}/>

                            </div>
                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonPrev}  type={"button"} value='Wstecz'/>
                            <input onClick={this.handleButtonNext} disabled={this.state.button} type={"button"} value='Dalej'/>
                        </div>
                    </div>

                </div>

            </section>

        </>;
        let step4 = <>
            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep4}
                    </div>

                </div>

                <div className={"teddyBackground"}>
                    <span>Kro 4/4</span>
                    <div className={"stepsForm"}>
                        <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                        <div className={"forms"}>
                            <div>
                            <h4>Adres odbioru:</h4>
                            <form onSubmit={this.handleOnSubmit}>
                                <label>
                                    Ulica
                                    <input name={"street"} onChange={this.handleOnChange} value={this.state.street}/>
                                </label>
                                <label>
                                   Miasto
                                    <input name={"city"} type="city" onChange={this.handleOnChange} value={this.state.city}/>
                                </label>
                                <label>
                                    Kod<br/> pocztowy
                                    <input name={"postcode"} type={"postcode"} onChange={this.handleOnChange} value={this.state.postcode}/>
                                </label>
                                <label>
                                    Numer telefonu
                                    <input  name={"phone"}  type={"tel"} onChange={this.handleOnChange}  value={this.state.phone}/>
                                </label>
                            </form>
                            </div>
                          <div>
                            <h4>Termin odbioru:</h4>
                            <form  onSubmit={this.handleOnSubmit}>
                                <label>
                                   Data
                                    <input type="date" name="date" onChange={this.handleOnChange} value={this.state.date}/>
                                </label>
                                <label>
                               Godzina
                                    <input type="time" name="usr_time" onChange={this.handleOnChange} />
                                </label>
                                <label>
                                    Uwagi dla kuriera
                                    <textarea name={"message"}onChange={this.handleOnChange} value={this.state.message}/>
                                </label>

                            </form>
                          </div>



                        </div>
                        <div className={"bagsButtons"}>
                            <input onClick={this.handleButtonPrev} type={"button"} value='Wstecz'/>
                            <input type={"button"}  value='Dalej'/>
                        </div>
                    </div>

                </div>

            </section>

        </>;

if(this.state.counter==2 && valueFromRadio!==null  ) {
    return step2
}else if(this.state.counter==3 && valueFromRadio!==null ) {
    return step3
}else if (this.state.counter==4 && valueFromRadio!==null ){
    return step4
}

//         {
    return step1
        }

}


export default TeddyBearForm;