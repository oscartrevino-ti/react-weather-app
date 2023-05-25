import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const Forecast = ({data}) => {

    const daynInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(daynInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, daynInAWeek));

    return (
    <>
    <div className="title-container">
    <label className="title">Proximos días</label>
    <label className="subtitle">Selecciona el día de tu interés</label>
    </div>

    <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (

        <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>

                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_min)} ℃ / {Math.round(item.main.temp_max)} ℃</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Presión</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humedad</label>
                        <label>{item.main.humidity} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Nubes</label>
                        <label>{item.clouds.all} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Viento</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Nivel de Mar:</label>
                        <label>{item.main.sea_level} m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sensación</label>
                        <label>{Math.round(item.main.feels_like)} ℃</label>
                    </div>
                </div>
            </AccordionItemPanel>
        </AccordionItem>

        ))}
    </Accordion>
    </>
)}

export default Forecast;