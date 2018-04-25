# MegatonApi.TenantsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenant**](TenantsApi.md#createTenant) | **POST** /v1/tenants | Create new tenant
[**deleteAuthenticatedTenant**](TenantsApi.md#deleteAuthenticatedTenant) | **DELETE** /v1/tenants/me | Delete authenticated tenant
[**getAuthenticatedTenant**](TenantsApi.md#getAuthenticatedTenant) | **GET** /v1/tenants/me | Get authenticated tenant


<a name="createTenant"></a>
# **createTenant**
> Tenant createTenant(body)

Create new tenant

Create a new tenant with email and password authentication

### Example
```javascript
var MegatonApi = require('megaton_api');

var apiInstance = new MegatonApi.TenantsApi();

var body = new MegatonApi.TenantSpec(); // TenantSpec | 

apiInstance.createTenant(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TenantSpec**](TenantSpec.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAuthenticatedTenant"></a>
# **deleteAuthenticatedTenant**
> deleteAuthenticatedTenant()

Delete authenticated tenant

Use Bearer token to identify and permanently delete tenant

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.TenantsApi();
apiInstance.deleteAuthenticatedTenant().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthenticatedTenant"></a>
# **getAuthenticatedTenant**
> Tenant getAuthenticatedTenant()

Get authenticated tenant

Use Bearer token to identify and retrieve tenant details

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.TenantsApi();
apiInstance.getAuthenticatedTenant().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Tenant**](Tenant.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

