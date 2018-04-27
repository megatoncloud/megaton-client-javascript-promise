# MegatonApi.OAuthTokensApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOAuthToken**](OAuthTokensApi.md#createOAuthToken) | **POST** /v1/oauth2/tokens | Create new token


<a name="createOAuthToken"></a>
# **createOAuthToken**
> OAuthToken createOAuthToken(grantType, username, password, scope)

Create new token

Create a new OAuth2 token with email and password authentication

### Example
```javascript
var MegatonApi = require('megaton_api');

var apiInstance = new MegatonApi.OAuthTokensApi();

var grantType = "grantType_example"; // String | 

var username = "username_example"; // String | 

var password = "password_example"; // String | 

var scope = "scope_example"; // String | 

apiInstance.createOAuthToken(grantType, username, password, scope).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 
 **scope** | **String**|  | 

### Return type

[**OAuthToken**](OAuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

