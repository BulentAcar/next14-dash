import { addUser } from "@/lib/actions";
import styles from "@/ui/dashboard/personeel/personeel.module.css";
import Script from "next/script";
// import {formhandle} from "@/lib/script";


const PersoneelPage = () => {

  
  return (
    <div className={styles.containerbody}>
      <div className={styles.container}>
      <header>Registratie</header>

      <div className={styles.form}>
        <form action="#">
          <div className={styles.form1}>
          <div className={styles.section1}>
            <span className={styles.title}>Section1</span>

            <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Voornaam</label>
                <input type="text" placeholder="Voornaam"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Achternaam</label>
                <input type="text" placeholder="Achternaam"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geboortedatum</label>
                <input type="date" placeholder="Geboortedatum"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Email</label>
                <input type="text" placeholder="Email"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Mobiel Nummer</label>
                <input type="number" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geslacht</label>
                <input type="text" placeholder="Geslacht"    /> 
              </div>

            </div>
              <div className={styles.section2}>
              <span className={styles.title}>Section 2</span>

              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <input type="text" placeholder="Soort ID"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Plaats Afgifte</label>
                <input type="text" placeholder="Plaats Afgifte"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="file" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID"    /> 
              </div> 
              
              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID"    /> 
              </div>
            </div>

            </div>
              <div className={styles.section3}>
              <span className={styles.title}>Section 3</span>

              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <input type="text" placeholder="Soort ID"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Plaats Afgifte</label>
                <input type="text" placeholder="Plaats Afgifte"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="file" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID"    /> 
              </div> 
              
              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID"    /> 
              </div>
            </div>

            {/* <button className={styles.nextBtn}>
              <span className={styles.btnTxt}>Volgende</span>
              <i className="uil uil-angle-right"></i>
            </button> */}

          </div>
          </div>
          </div>

          <div className={styles.form2}>
          <div className={styles.section4}>
            <span className={styles.title}>Section 4</span>

            <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Voornaam</label>
                <input type="text" placeholder="Voornaam"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Achternaam</label>
                <input type="text" placeholder="Achternaam"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geboortedatum</label>
                <input type="date" placeholder="Geboortedatum"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Email</label>
                <input type="text" placeholder="Email"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Mobiel Nummer</label>
                <input type="number" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geslacht</label>
                <input type="text" placeholder="Geslacht"    /> 
              </div>

            </div>
              <div className={styles.section5}>
              <span className={styles.title}>Section 5</span>

              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <input type="text" placeholder="Soort ID"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Plaats Afgifte</label>
                <input type="text" placeholder="Plaats Afgifte"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="file" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID"    /> 
              </div> 
              
              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID"    /> 
              </div>
            </div>

            </div>
              <div className={styles.section6}>
              <span className={styles.title}>Section 6</span>

              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <input type="text" placeholder="Soort ID"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Plaats Afgifte</label>
                <input type="text" placeholder="Plaats Afgifte"    /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="file" placeholder="Mobiel nummer"    /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID"    /> 
              </div> 
              
              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID"    /> 
              </div>
            </div>


            <div className={styles.buttons}>

              <button className={styles.backBtn}>
                <i className="uil uil-angle-left"></i>
                <span className={styles.btnTxt}>Vorige</span>                
              </button>

              <button className={styles.nextBtn}>
                <span className={styles.btnTxt}>Volgende</span>
                <i className="uil uil-angle-right"></i>
              </button>

            </div>

          </div>
          </div>
          </div>
        </form> 
      </div>
      </div>
      
    
    </div>  
    
    
  );
};

export default PersoneelPage;
