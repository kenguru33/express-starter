# Express starter with azure-ad

## Environment configuration

### Environment
- **NODE_ENV** production | development | test (default: development)

### Application config variables
- **HOST** server hostname
- **HOST_PORT** server port
- **API_KEY** application key
- **LOGGER_LEVEL** log level

### Database config variables
- **DB_URI** mongodb uri

### Authentication strategies condif variables
#### Azure AD
- **IDENTITY_METADATA** https://login.microsoftonline.com/<your tenant id>/.well-known/openid-configuration (tenant id is the same as directory id)
- **CLIENT_ID** clientid also called app id
- **CLIENT_KEY** client secret
- **AUDIENCE** your application URL (app udi)
- **VALIDATE_ISSUER** true | false If you have validation on, you cannot have users from multiple tenants sign in to 
your server
- **PASS_REQ_TO_CALLBACK** true | false set this to false



