# MegatonApi.TestExecutionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeTest**](TestExecutionsApi.md#executeTest) | **POST** /v1/tenants/me/test-plans/{testPlanId}/test-executions | Execute test plan
[**getTestExecutions**](TestExecutionsApi.md#getTestExecutions) | **GET** /v1/tenants/me/test-plans/{testPlanId}/test-executions | Get test executions


<a name="executeTest"></a>
# **executeTest**
> TestExecution executeTest(testPlanId)

Execute test plan

Executes a specified test plan

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.TestExecutionsApi();

var testPlanId = 56; // Number | 

apiInstance.executeTest(testPlanId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 

### Return type

[**TestExecution**](TestExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTestExecutions"></a>
# **getTestExecutions**
> [TestExecution] getTestExecutions(testPlanId)

Get test executions

Retrieve all executed tests for a specified test plan

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.TestExecutionsApi();

var testPlanId = 56; // Number | 

apiInstance.getTestExecutions(testPlanId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 

### Return type

[**[TestExecution]**](TestExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

