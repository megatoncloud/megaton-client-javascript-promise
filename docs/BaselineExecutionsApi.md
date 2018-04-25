# MegatonApi.BaselineExecutionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeBaseline**](BaselineExecutionsApi.md#executeBaseline) | **POST** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions | Execute baseline
[**getBaselineExecutions**](BaselineExecutionsApi.md#getBaselineExecutions) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions | Get baseline executions


<a name="executeBaseline"></a>
# **executeBaseline**
> BaselineExecution executeBaseline(useCaseId, body)

Execute baseline

Executes a baseline for a specified use-case

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.BaselineExecutionsApi();

var useCaseId = 56; // Number | 

var body = new MegatonApi.BaselineExecutionSpec(); // BaselineExecutionSpec | 

apiInstance.executeBaseline(useCaseId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **body** | [**BaselineExecutionSpec**](BaselineExecutionSpec.md)|  | 

### Return type

[**BaselineExecution**](BaselineExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBaselineExecutions"></a>
# **getBaselineExecutions**
> [BaselineExecution] getBaselineExecutions(useCaseId)

Get baseline executions

Retrieve all executed baselines for a specified use-case

### Example
```javascript
var MegatonApi = require('megaton_api');
var defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
var password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new MegatonApi.BaselineExecutionsApi();

var useCaseId = 56; // Number | 

apiInstance.getBaselineExecutions(useCaseId).then(function(data) {
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

[**[BaselineExecution]**](BaselineExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

