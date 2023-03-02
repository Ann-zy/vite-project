let host: string;
let h5host: string;// 跳转到另一项目的域名
let zzgHost: string;

if (process.env.NODE_ENV === "production") {
    if (process.env.CUSTOM_ENV === "dev") {
      host = "https://d-fssaas.lepass.cn";
      h5host = 'https://d-h5.lepass.cn';
      zzgHost = 'https://d-h5.lepass.cn';
    } else if (process.env.CUSTOM_ENV === "test") {
      host = "https://t-fssaas.lepass.cn";
      h5host = 'https://t-h5.lepass.cn';
      zzgHost = 'https://t-h5.lepass.cn';
    } else if (process.env.CUSTOM_ENV === "pre") {
      host = "https://p-fssaas.lepass.cn";
      h5host = 'https://p-h5.lepass.cn';
      zzgHost = 'https://p-h5.lepass.cn';
    } else if (process.env.CUSTOM_ENV === "prd") {
      host = "https://zzgsaas.leshuazf.com";
      h5host = 'https://zzgfs.leshuazf.com';
      zzgHost = 'https://zzgfs.leshuazf.com';
    }
  } else {
    host = "http://localhost:8088/";
  }

export default {
    host,
    h5host,
    zzgHost,
    syjVersion: 21, // 灰度版本号
};