# MegatonApi.HTTPScriptApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHttpScript**](HTTPScriptApi.md#getHttpScript) | **GET** /v1/tenants/me/use-cases/{useCaseId}/http-script | Get HTTP script
[**getHttpScriptEntryBody**](HTTPScriptApi.md#getHttpScriptEntryBody) | **GET** /v1/tenants/me/use-cases/{useCaseId}/http-script/{entryId}/body | Get HTTP script entry body
[**getHttpScriptEntryHeaders**](HTTPScriptApi.md#getHttpScriptEntryHeaders) | **GET** /v1/tenants/me/use-cases/{useCaseId}/http-script/{entryId}/headers | Get HTTP script entry headers


<a name="getHttpScript"></a>
# **getHttpScript**
> [HTTPScriptEntry] getHttpScript(useCaseId)

Get HTTP script

Retrieves HTTP script for a specified use-case

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.HTTPScriptApi();

var useCaseId = 56; // Number | 

apiInstance.getHttpScript(useCaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 

### Return type

[**[HTTPScriptEntry]**](HTTPScriptEntry.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHttpScriptEntryBody"></a>
# **getHttpScriptEntryBody**
> getHttpScriptEntryBody(useCaseId, entryId)

Get HTTP script entry body

Retrieves body for a specified use-case and HTTP script entry

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.HTTPScriptApi();

var useCaseId = 56; // Number | 

var entryId = 56; // Number | 

apiInstance.getHttpScriptEntryBody(useCaseId, entryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **entryId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getHttpScriptEntryHeaders"></a>
# **getHttpScriptEntryHeaders**
> [HTTPMessageHeader] getHttpScriptEntryHeaders(useCaseId, entryId)

Get HTTP script entry headers

Retrieves headers for a specified use-case and HTTP script entry

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.HTTPScriptApi();

var useCaseId = 56; // Number | 

var entryId = 56; // Number | 

apiInstance.getHttpScriptEntryHeaders(useCaseId, entryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **entryId** | **Number**|  | 

### Return type

[**[HTTPMessageHeader]**](HTTPMessageHeader.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

