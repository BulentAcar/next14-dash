import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);


const personeelSchema = new mongoose.Schema(
  {
    bsn: {
      type: String,
      required: true,
      unique: true,
    },
    foto: {
      type: String,  
    },
    geslacht: {
      type: String,
    },
    img: {
      type: String,
    },
    titel: {
      type: String,
    },
    voorletters: {
      type: String,
    },
    voornaam: {
      type: String,
    },
    tussenvoegsel: {
      type: String,
    },
    achternaam: {
      type: String,  
    },
    geboortedatum: {
      type: Date,
    },
    geboorteplaats: {
      type: String,
    },
    geboorteland: {
      type: String,
    },
    nationaliteit: {
      type: String,
    },
    burgerstaat: {
      type: String,
    },
    naampartner: {
      type: String,
    },
    naamnood: {
      type: String,  
    },
    nrnood: {
      type: String,
    },
    straatnaam: {
      type: String,
    },
    huisnr: {
      type: String,
    },
    postcode: {
      type: String,
    },
    plaatsnaam: {
      type: String,
    },
    poststraat: {
      type: String,
    },
    posthuisnr: {
      type: String,  
    },
    postpostcode: {
      type: String,
    },
    postplaats: {
      type: String,
    },
    telnr: {
      type: String,
    },
    email: {
      type: String,
    },
    mobnr: {
      type: String,
    },
    altnr: {
      type: String,
    },
    soortid: {
      type: String,
    },
    idnr: {
      type: String,
    },
    datafid: {
      type: String,  
    },
    datverid: {
      type: Date,
    },
    plaatsafid: {
      type: String,
    },
    scanid: {
      type: Boolean,
    },
    soortid2: {
      type: String,
    },
    idnr2: {
      type: String,
    },
    datafid2: {
      type: String,  
    },
    datverid2: {
      type: Date,
    },
    plaatsafid2: {
      type: String,
    },
    scanid2: {
      type: Boolean,
    },
    srtdienst: {
      type: String,
    },
    
    chwg: {
      type: String,
    },
    datindienst: {
      type: Date,
    },
    datuitdienst: {
      type: Date,  
    },
    functie: {
      type: String,
    },
    functietypering: {
      type: String,
    },
    loonschaal: {
      type: String,
    },
    uurtarief: {
      type: String,
    },
    bankpersoneel: {
      type: String,
    },
    naamrekhpers: {
      type: String,
    },
    ibanpersoneel: {
      type: String,  
    },
    scanbankpas: {
      type: Boolean,  
    },
    vogpersoneel: {
      type: Boolean,
    },
    lhformpersoneel: {
      type: Boolean,
    },
    verdienstbetrekking: {
      type: Boolean,
    },
    modeldbapers: {
      type: Boolean,
    },
    actiefpers: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export const Personeel = mongoose.models?.Personeel || mongoose.model("Personeel", personeelSchema);