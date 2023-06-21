import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Link, useParams } from "react-router-dom";
import { API_ROUTES} from '../helper/utility';
import { delay, motion } from "framer-motion";



interface ReportData {
  id : number; 
    title: string;
    specie: string;
    report_type: string;
    age: number;
    sex: string;
    last_time_seen: string;
    ubication_resume: string;
    name: string;
    phone: string;
    picture: string;

   }

   const maindiv = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  }

export const Exito = () => {
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { id } = useParams<{ id: string }>(); 

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.GET_REPORT_BY_ID}${id}`);
        const data = await response.json();
        setReportData(data);
   
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchReportData();
  }, [id]);

  const handleExportClick = () => {
    
    if (imageRef.current) {
      if (cardRef.current && imageRef.current.complete) {
        html2canvas(cardRef.current, {
          allowTaint: true,
          useCORS: true,
        }).then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.download = "reporte.png";
          link.click();
        });
      }
    }
  };

  if (!reportData) {
    return <div>Loading...</div>;
  }


  const {
    id :report_id,
    report_type,
    title,
    specie,
    age,
    sex,
    last_time_seen,
    ubication_resume,
    name,
    phone,
    picture,
  } = reportData;
 
  return (
    <motion.div 
    variants={maindiv}
    initial = "hidden"
    animate="visible"
    transition={{duration: 0.38,
    
      when: "afterChildren",
      staggerChildren: 1,
    }}
    
    className="reportcont">
     
        <span className="reportnro" > Reporte # {report_id},{" "}creado con éxito!</span>
<span className="reportmessagge">El ID de su reporte es: {report_id},{" "}, guarde este identificador para futuras modificaciones o consultas.</span>
      <motion.div 
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
      transition={{ duration : 2, delay: 1}}
      aria-label="Reporte" className="cartaReporte " ref={cardRef}>
      
          <div className="headerContent">
    
                <img src={`${picture}`} alt="imagen de mascota" className="imageReport"  ref={imageRef}/>
            <div className="titleReport">
                <h3 >
                  {specie.toUpperCase()} {report_type.toUpperCase()}
                </h3>
            </div>
        </div>

        <div className="contentContainer">
          <div className="datosContainer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M169.859-485Q132-485 106-511.141t-26-64Q80-613 106.141-639t64-26Q208-665 234-638.859t26 64Q260-537 233.859-511t-64 26Zm185-170Q317-655 291-681.141t-26-64Q265-783 291.141-809t64-26Q393-835 419-808.859t26 64Q445-707 418.859-681t-64 26Zm250 0Q567-655 541-681.141t-26-64Q515-783 541.141-809t64-26Q643-835 669-808.859t26 64Q695-707 668.859-681t-64 26Zm185 170Q752-485 726-511.141t-26-64Q700-613 726.141-639t64-26Q828-665 854-638.859t26 64Q880-537 853.859-511t-64 26ZM266-75q-42 0-69-31.526T170-181q0-42 25.5-74.5T250-318q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790-181q0 42.948-27 74.474Q736-75 694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
              </svg>
            </div>
            <span className="textoReport">
              {name} Tiene aprox. : {age} años Sexo: {sex}
            </span>
          </div>
          <div className="datosContainer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
            </div>
            <span className="textoReport">
              Ult vez visto : {last_time_seen}
            </span>
          </div>
          <div className="direccionContainer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z" />
              </svg>
            </div>
            <div>
              <span className="textoReport">{ubication_resume}</span>
            </div>
          </div>
          <div className="datosContainer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M60-120q-24 0-42-18T0-180v-600q0-24 18-42t42-18h840q24 0 42 18t18 42v600q0 24-18 42t-42 18H60Zm531-60h309v-600H60v600h7q44-69 112.5-109T329-329q81 0 149.5 40T591-180ZM329-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm427 172 77-76-57-81h-70q-9-25-12.5-46.5T690-479q0-26 3.5-47t12.5-47h70l57-81-77-76q-55 45-85.5 111T640-479q0 74 30.5 140T756-228Zm-613 48h372q-35.606-42.275-84.303-65.637Q382-269 329-269t-101.5 23.5Q179-222 143-180Zm186-280q-25.5 0-42.75-17.25T269-520q0-25.5 17.25-42.75T329-580q25.5 0 42.75 17.25T389-520q0 25.5-17.25 42.75T329-460Zm151-20Z" />
              </svg>
            </div>
            <span className="textoReport">
              Contactar a: {title} &nbsp;
              al: {phone}
            </span>
          </div>
        </div>
       
      </motion.div>
      
      <button className="pushable" onClick={handleExportClick}>
  <span className="shadowButton"></span>
  <span className="edge"></span>
  <span className="front">
    Exportar como Imagen
  </span>
</button>
      
        <span>La información proporcionada fue publicada en este sitio web, puede ver el reporte completo <Link to={`/report/${report_id}`}>aqui</Link>, también fue publicada en las distintas redes sociales de la página.</span>
    </motion.div>
  );
};
