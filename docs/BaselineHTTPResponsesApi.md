# MegatonApi.BaselineHTTPResponsesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBaselineHttpResponseBody**](BaselineHTTPResponsesApi.md#getBaselineHttpResponseBody) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses/{responseId}/body | Get baseline response body
[**getBaselineHttpResponseHeaders**](BaselineHTTPResponsesApi.md#getBaselineHttpResponseHeaders) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses/{responseId}/headers | Get baseline response headers
[**getBaselineHttpResponses**](BaselineHTTPResponsesApi.md#getBaselineHttpResponses) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses | Get baseline responses


<a name="getBaselineHttpResponseBody"></a>
# **getBaselineHttpResponseBody**
> getBaselineHttpResponseBody(useCaseId, executionId, responseId)

Get baseline response body

Retrieve body for a specified HTTP response and baseline exeuction

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

var useCaseId = 56; // Number | 

var executionId = 56; // Number | 

var responseId = 56; // Number | 

apiInstance.getBaselineHttpResponseBody(useCaseId, executionId, responseId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 
 **responseId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBaselineHttpResponseHeaders"></a>
# **getBaselineHttpResponseHeaders**
> [HTTPMessageHeader] getBaselineHttpResponseHeaders(useCaseId, executionId, responseId)

Get baseline response headers

Retrieve headers for a specified HTTP response and baseline exeuction

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

var useCaseId = 56; // Number | 

var executionId = 56; // Number | 

var responseId = 56; // Number | 

apiInstance.getBaselineHttpResponseHeaders(useCaseId, executionId, responseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 
 **responseId** | **Number**|  | 

### Return type

[**[HTTPMessageHeader]**](HTTPMessageHeader.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaselineHttpResponses"></a>
# **getBaselineHttpResponses**
> [HTTPResponse] getBaselineHttpResponses(useCaseId, executionId)

Get baseline responses

Retrieve HTTP responses for a specified baseline exeuction

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

var useCaseId = 56; // Number | 

var executionId = 56; // Number | 

apiInstance.getBaselineHttpResponses(useCaseId, executionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 

### Return type

[**[HTTPResponse]**](HTTPResponse.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

