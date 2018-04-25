# MegatonApi.TestHTTPResponsesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTestHttpResponses**](TestHTTPResponsesApi.md#getTestHttpResponses) | **GET** /v1/tenants/me/test-plans/{testPlanId}/test-executions/{executionId}/http-responses | Get test responses


<a name="getTestHttpResponses"></a>
# **getTestHttpResponses**
> [HTTPResponse] getTestHttpResponses(testPlanId, executionId)

Get test responses

Retrieve HTTP responses for a specified test exeuction

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.TestHTTPResponsesApi();

var testPlanId = 56; // Number | 

var executionId = 56; // Number | 

apiInstance.getTestHttpResponses(testPlanId, executionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 
 **executionId** | **Number**|  | 

### Return type

[**[HTTPResponse]**](HTTPResponse.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

