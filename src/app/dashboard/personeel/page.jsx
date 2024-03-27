"use client";

import { addPersoneel } from "@/lib/action";
import styles from "@/ui/dashboard/personeel/personeel.module.css";
import { useFormState } from "react-dom";



const PersoneelPage = () => {
  const [state, formAction] = useFormState(addPersoneel, undefined);

  
  return (
    <div className={styles.containerbody}>
      <div className={styles.container}>
      <header>Registratie Personeel</header>

      <div className={styles.form}>
        <form action={formAction}>
          <div className={styles.form1}>
          <div className={styles.section1}>
            <span className={styles.title}>Persoonsgegevens</span>

            <div className={styles.fields}>
              
              <div className={styles.inputfield}>
                <label>BSN nummer</label>
                <input type="text" placeholder="BSN nummer" name="bsn"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Foto</label>
                <input type="text" placeholder="Foto"  name="foto"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geslacht</label>
                <select name="geslacht">
                  <option value="Man">Man</option>
                  <option value="Vrouw">Vrouw</option>
                </select>
                {/* <input type="text" placeholder="Geslacht" name="geslacht"   />  */}
              </div>

              <div className={styles.inputfield}>
                <label>Titel</label>
                <input type="text" placeholder="Titel"  name="titel"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Voorletters</label>
                <input type="text" placeholder="Voorletters" name="voorletters"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Voornaam</label>
                <input type="text" placeholder="Voornaam" name="voornaam"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Tussenvoegsel</label>
                <input type="text" placeholder="Tussenvoegsel"  name="tussenvoegsel"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Achternaam</label>
                <input type="text" placeholder="Achternaam"  name="achternaam"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geboortedatum</label>
                <input type="date" placeholder="Geboortedatum" name="geboortedatum"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Geboorteplaats</label>
                <input type="text" placeholder="Geboorteplaats" name="geboorteplaats"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Geboorteland</label>
                <input type="text" placeholder="Geboorteland" name="geboorteland"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Nationaliteit</label>
                <input type="text" placeholder="Nationaliteit" name="nationaliteit"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Burgerlijke Staat</label>
                <select name="burgerstaat">
                  <option value="Vrijgezel">Vrijgezel</option>
                  <option value="Gehuwd">Gehuwd</option>
                  <option value="Samenwonend">Samenwonend</option>
                </select>    
              </div>
              
              <div className={styles.inputfield}>
                <label>Naam Partner</label>
                <input type="text" placeholder="Naam partner" name="naampartner"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Naam Noodcontactpersoon</label>
                <input type="text" placeholder="Naam Noodcontactpersoon" name="naamnood"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Nummer Noodcontactpersoon</label>
                <input type="text" placeholder="Nummer Noodcontactpersoon"  name="nrnood"  /> 
              </div>

            </div>
              
              <div className={styles.section21}>
              <span className={styles.title}>Adresgegevens</span>

              <span className={styles.subtitle}>Adres</span>
              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Straatnaam</label>
                <input type="text" placeholder="Straatnaam" name="straatnaam"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Huisnummer</label>
                <input type="text" placeholder="Huisnummer"  name="huisnr"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Postcode</label>
                <input type="text" placeholder="Postcode" name="postcode"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Plaatsnaam</label>
                <input type="text" placeholder="Plaatsnaam"  name="plaatsnaam"  /> 
              </div>
              </div>

              <div className={styles.section22}>
              <span className={styles.subtitle}>Postadres</span>
              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Straatnaam</label>
                <input type="text" placeholder="Straatnaam"  name="poststraat"  /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Huisnummer</label>
                <input type="text" placeholder="Huisnummer"  name="posthuisnr"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Postcode</label>
                <input type="text" placeholder="Postcode" name="postpostcode"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Plaatsnaam</label>
                <input type="text" placeholder="Plaatsnaam"  name="postplaats"  /> 
              </div>
              
              </div>
              </div>
            </div>
          
          </div>
          </div>

          <div className={styles.section3}>
            <span className={styles.title}>Contactgegevens</span>

            <div className={styles.fields}>
              
              <div className={styles.inputfield}>
                <label>Telefoonnummer</label>
                <input type="text" placeholder="Telefoonnummer"  name="telnr"  />
              </div>

              <div className={styles.inputfield}>
                <label>Email</label>
                <input type="text" placeholder="Email" name="email"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Mobiel Nummer</label>
                <input type="text" placeholder="Mobiel nummer"  name="mobnr"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Alternatief nummer</label>
                <input type="text" placeholder="Alternatief nummer"  name="altnr" /> 
              </div>

            </div>

          <div className={styles.section4}>
              <span className={styles.title}>ID Gegevens</span>

            <div className={styles.fields}>
              
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <select name="soortid">
                  <option value="selecteer">Selecteer</option>
                  <option value="Rijbewijs">Rijbewijs</option>
                  <option value="ID Kaart">ID Kaart</option>
                  <option value="Paspoort">Paspoort</option>
                </select>
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer" name="idnr"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID" name="datafid"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID" name="datverid"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Instantie / Afgegeven door</label>
                <input type="text" placeholder="Instantie / Plaats Afgifte"  name="plaatsafid"  /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="checkbox" placeholder="Scan ID" name="scanid" value="true" /> 
              </div>
                         
            </div>

            <div className={styles.fields}>
              
              <div className={styles.inputfield}>
                <label>Soort ID</label>
                <select name="soortid2">
                  <option value="selecteer">Selecteer</option>
                  <option value="Rijbewijs">Rijbewijs</option>
                  <option value="ID Kaart">ID Kaart</option>
                  <option value="Paspoort">Paspoort</option>
                </select> 
              </div>
              
              <div className={styles.inputfield}>
                <label>ID Nummer</label>
                <input type="text" placeholder="ID Nummer" name="idnr2"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum afgifte ID</label>
                <input type="date" placeholder="Datum afgifte ID" name="datafid2"   /> 
              </div>

              <div className={styles.inputfield}>
                <label>ID geldig tot</label>
                <input type="date" placeholder="Verloopdatum ID" name="datverid2"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Instantie / Afgegeven door</label>
                <input type="text" placeholder="Instantie / Plaats Afgifte"  name="plaatsafid2"  /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Scan ID</label>
                <input type="checkbox" placeholder="Scan ID2" name="scanid2" value="true"  /> 
              </div>
            
            </div>
          </div>

          
          
            <div className={styles.section5}>
              <span className={styles.title}>Dienstgegevens</span>

              <div className={styles.fields}>

              <div className={styles.inputfield}>
                <label>Soort Dienstverband</label>
                <select name="srtdienst">
                  <option value="selecteer">Selecteer</option>
                  <option value="LD Vast">Loondienst vast</option>
                  <option value="LD Tijdelijk">Loondienst Tijdelijk</option>
                  <option value="ZZP">ZZP</option>
                  <option value="Overig">Uitzendkracht</option>
                </select> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Charter / Werkgever</label>
                <input type="text" placeholder="Charter / Werkgever"  name="chwg"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Datum indienst</label>
                <input type="date" placeholder="Datum indienst"  name="datindienst"  /> 
              </div>
                                          
              <div className={styles.inputfield}>
                <label>Einddatum Dienstverband</label>
                <input type="date" placeholder="Einddatum Dienstverband" name="datuitdienst"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Functie</label>
                <input type="text" placeholder="Functie" name="functie"   /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Functie Typering </label>
                <input type="text" placeholder="Functie Typering" name="functietypering"   /> 
              </div> 
              
              <div className={styles.inputfield}>
                <label>Functie Loonschaal.Trede </label>
                <input type="text" placeholder="Loonschaal.Trede (bijv A.3)" name="loonschaal"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>Uurloon / Uurtarief</label>
                <input type="integer" placeholder="Uurloon / Uurtarief"  name="uurtarief"  /> 
              </div> 
                                       
            </div>

            </div>
              <div className={styles.section6}>
              <span className={styles.title}>Bankgegevens</span>

              <div className={styles.fields}>
              <div className={styles.inputfield}>
                <label>Naam Bank</label>
                <input type="text" placeholder="Naam Bank" name="bankpersoneel"   /> 
              </div>

               <div className={styles.inputfield}>
                <label>Naam Rekeninghouder</label>
                <input type="text" placeholder="Naam rekeninghouder"  name="naamrekhpers"  /> 
              </div>

              <div className={styles.inputfield}>
                <label>IBAN Nummer</label>
                <input type="text" placeholder="IBAN nummer"  name="ibanpersoneel"  /> 
              </div>
                          
              <div className={styles.inputfield}>
                <label>Scan Bankpas</label>
                <input type="checkbox" placeholder="Bankpas"  name="scanbankpas" value="true" /> 
              </div>
             
            </div>

            </div>
              <div className={styles.section6}>
              <span className={styles.title}>Overige</span>

              <div className={styles.fields}>
              
              
                                         
              <div className={styles.inputfield}>
                <label>Verklaring Omtrent Gedrag (VOG)</label>
                <input type="checkbox" placeholder="Verklaring omtrent gedrag"  name="vogpersoneel" value="true" /> 
              </div>

               <div className={styles.inputfield}>
                <label>Loonheffings Formulier</label>
                <input type="checkbox" placeholder="Loonheffingsformulier" name="lhformpersoneel"  value="true" /> 
              </div>             

              <div className={styles.inputfield}>
                <label>Verklaring Dienstbetrekking</label>
                <input type="checkbox" placeholder="Verklaring Dienstbetrekking" name="verdienstbetrekking" value="true"  /> 
              </div>  

              <div className={styles.inputfield}>
                <label>Modelovereenkomst Wet DBA</label>
                <input type="checkbox" placeholder="Modelovereenkomst Wet DBA"  name="modeldbapers" value="true" /> 
              </div>
              
              <div className={styles.inputfield}>
                <label>Actief</label>
                <input type="checkbox" placeholder="Actief"  name="actiefpers" value="true" /> 
              </div>

            </div>

            <div className={styles.buttons}>

              <button className={styles.backBtn}>
               
                <span className={styles.btnTxt}>Opslaan</span> <i className="uil uil-save"></i>                
              </button>
              {state?.success}
              {state?.error}

              {/* <button className={styles.nextBtn}>
                <span className={styles.btnTxt}>Volgende</span>
                <i className="uil uil-angle-right"></i>
              </button> */}

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
