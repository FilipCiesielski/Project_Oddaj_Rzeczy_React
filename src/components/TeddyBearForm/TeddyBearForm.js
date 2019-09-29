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

class TeddyBearForm extends Component {

    state = {
        valueFromRadio: null,
        valueFromOption: 1,
        stepNumber: 1,
        goToStep2: false,
        goToStep3: false,
        goToSteep4: false,

    };
    handleOnChange = e => {
        this.setState({valueFromOption: e.target.value})
    }
    handleOnClick = e => {

        this.setState({
            valueFromRadio: e.target.value
        })
    };
    handleOnSubmit = (e) => {
        e.preventDefault()
        if (this.state.valueFromRadio !== null) {
            this.setState({goTosStep2: true, stepNumber: 2})
        }
    }

    render() {
        let valueFromRadio = this.state.valueFromRadio;
        console.log(valueFromRadio);
        let valueFromOption = this.state.valueFromOption;
        console.log(valueFromOption)
        let goToStep2 = this.state.goToStep2;
        console.log(goToStep2)
        let goToStep3 = this.state.goToStep3;
        let step1 = (<>
                <div className={"stepsForm"}>
                    <h2>Zaznacz co chcesz oddać</h2>
                    <div className={"form"}>

                        <label className={"container1"}>

                            <input type={"radio"} value={"ubrania, które nadają się do ponownego użycia"} name={"radio"}
                                   onClick={this.handleOnClick}/>

                            <span className="checkmark"></span>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className={"container1"}>

                            <input type={"radio"} value={"ubrania do wyrzucenia"} name={"radio"}
                                   onClick={this.handleOnClick}/>

                            <span className="checkmark"></span>
                            ubrania do wyrzucenia
                        </label>
                        <label className={"container1"}>

                            <input type={"radio"} value={"zabawki"} name={"radio"}
                                   onClick={this.handleOnClick}/>

                            <span className="checkmark"></span>
                            zabawki
                        </label>
                        <label className={"container1"}>

                            <input type={"radio"} value={"książki"} name={"radio"}
                                   onClick={this.handleOnClick}/>

                            <span className="checkmark"></span>
                            książki
                        </label>
                        <label className={"container1"}>

                            <input type={"radio"} value={"inne"} name={"radio"} className={"radio"}
                                   onClick={this.handleOnClick}/>

                            <span className="checkmark"></span>
                            inne
                        </label>

                    </div>
                    <div className={"bagsButtons"}>
                        <input type={"button"} value='Dalej'/>
                    </div>
                </div>
            </>
        )
        let step2 =
            (
                <>
                    <div className={"stepsForm"}>
                        <h2>Podaj liczbę 60l worków, które spakowałeś/aś rzeczy:</h2>

                        <div className={"bags"}>
                            <p>Liczba 60L worków:</p>
                            <select value={this.state.valueFromOption} onChange={this.handleOnChange}>
                                <option value="" disabled hidden>wybierz</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                        <div className={"bagsButtons"}>
                            <input type={"button"} value='Wstecz'/>
                            <input type={"button"} value='Dalej'/>
                        </div>
                    </div>
                </>
            )
        let step3=(<>
            <div className={"stepsForm"}>
                <h2>Lokalizacja:</h2>

                <div className={"bags"}>
                    <div className={"optionSelect"}>
                        <select value={this.state.valueFromOption} onChange={this.handleOnChange}>
                            <option value="" disabled hidden>wybierz</option>
                            <option value="1">Poznań</option>
                            <option value="2">Warszawa</option>
                            <option value="3">Kraków</option>
                            <option value="4">Wrocław</option>
                            <option value="5">Katowice</option>

                        </select>
                        <div className={"optionBrick"}>

                            <h4>Komu chcesz pomóc?</h4>
                            <div className={"brick"}>
                                <div className={"go"}>
                                    <input id="lists2" type="checkbox" value={"dzieciom"} name="lists"/>
                                    <label htmlFor="lists2">dzieciom</label>
                                    <input id="lists1" type="checkbox" value={"samotnym matkom"} name="lists"/>
                                    <label htmlFor="lists1">samotnym matkom</label>
                                    <input id="lists3" type="checkbox" value={"bezdomnym"} name="list"/>
                                    <label htmlFor="lists3">bezdomnym</label>
                                    <input id="lists4" type="checkbox" value={"niepełnosprawnym"} name="lists"/>
                                    <label htmlFor="lists4">niepełnosprawnym</label>
                                    <input id="lists5" type="checkbox" value={"osobom starszym"} name="lists"/>
                                    <label htmlFor="lists5">osobom starszym</label>

                                </div>


                            </div>


                        </div>
                        <h4>Wpisz nazwę konkretnej organizacji(opcjonalnie)</h4>
                        <input type={"text"} name={"organisation"}/>

                    </div>
                </div>
                <div className={"bagsButtons"}>
                    <input type={"button"} value='Wstecz'/>
                    <input type={"button"} value='Dalej'/>
                </div>
            </div></>)

        return (

            <section className={"teddyForm"}>
                <div className={"yellowInfo"}>
                    <div>
                        {infoStep3}
                    </div>

                </div>

                <div className={"teddyBackground"}>
                    <span>Krok {this.state.stepNumber}/4</span>
                    <div className={"stepsForm"}>
                        <h2>Lokalizacja:</h2>

                        <div className={"bags"}>
                            <div className={"optionSelect"}>
                                <select value={this.state.valueFromOption} onChange={this.handleOnChange}>
                                    <option value="" disabled hidden>wybierz</option>
                                    <option value="1">Poznań</option>
                                    <option value="2">Warszawa</option>
                                    <option value="3">Kraków</option>
                                    <option value="4">Wrocław</option>
                                    <option value="5">Katowice</option>

                                </select>
                                <div className={"optionBrick"}>

                                    <h4>Komu chcesz pomóc?</h4>
                                    <div className={"brick"}>
                                        <div className={"go"}>
                                            <input id="lists2" type="checkbox" value={"dzieciom"} name="lists"/>
                                            <label htmlFor="lists2">dzieciom</label>
                                            <input id="lists1" type="checkbox" value={"samotnym matkom"} name="lists"/>
                                            <label htmlFor="lists1">samotnym matkom</label>
                                            <input id="lists3" type="checkbox" value={"bezdomnym"} name="list"/>
                                            <label htmlFor="lists3">bezdomnym</label>
                                            <input id="lists4" type="checkbox" value={"niepełnosprawnym"} name="lists"/>
                                            <label htmlFor="lists4">niepełnosprawnym</label>
                                            <input id="lists5" type="checkbox" value={"osobom starszym"} name="lists"/>
                                            <label htmlFor="lists5">osobom starszym</label>

                                        </div>


                                    </div>


                                </div>
                                <h4>Wpisz nazwę konkretnej organizacji(opcjonalnie)</h4>
                                <input type={"text"} name={"organisation"}/>

                            </div>
                        </div>
                        <div className={"bagsButtons"}>
                            <input type={"button"} value='Wstecz'/>
                            <input type={"button"} value='Dalej'/>
                        </div>
                    </div>



                </div>

            </section>

        )
    }
}


export default TeddyBearForm;