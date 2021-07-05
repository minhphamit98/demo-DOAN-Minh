import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/minhshop',
  JWT_SECRET: process.env.JWT_SECRET || '425f027d7b0d122e5ec38064cc10ec03551e7945412d40082b43b4ae1d94be1b6bb8875c836c43a12967fcf2d9ae980534a946d7f3db586953e41e70cb78025f',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AbzNpLOoVhe8-TsI_I8zBAiGyXv_JUcEDNBgdnWF1QCYQ8Pz0poQdw-XjzGHu6-5AhXDHW2Im0WtRvd8',
};
