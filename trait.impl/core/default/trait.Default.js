(function() {var implementors = {
"actix_http":[["impl&lt;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_http/header/enum.ContentEncoding.html\" title=\"enum actix_http::header::ContentEncoding\">ContentEncoding</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/h1/struct.ClientCodec.html\" title=\"struct actix_http::h1::ClientCodec\">ClientCodec</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/body/struct.None.html\" title=\"struct actix_http::body::None\">None</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/header/map/struct.HeaderMap.html\" title=\"struct actix_http::header::map::HeaderMap\">HeaderMap</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.Extensions.html\" title=\"struct actix_http::Extensions\">Extensions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.ServiceConfig.html\" title=\"struct actix_http::ServiceConfig\">ServiceConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.ResponseBuilder.html\" title=\"struct actix_http::ResponseBuilder\">ResponseBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/test/struct.TestRequest.html\" title=\"struct actix_http::test::TestRequest\">TestRequest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/ws/struct.Codec.html\" title=\"struct actix_http::ws::Codec\">Codec</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_http/enum.KeepAlive.html\" title=\"enum actix_http::KeepAlive\">KeepAlive</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.TlsAcceptorConfig.html\" title=\"struct actix_http::TlsAcceptorConfig\">TlsAcceptorConfig</a>"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.HttpServiceBuilder.html\" title=\"struct actix_http::HttpServiceBuilder\">HttpServiceBuilder</a>&lt;T, S, <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>, <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>&gt;<div class=\"where\">where\n    S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt; + 'static,\n    S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    &lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/header/struct.Quality.html\" title=\"struct actix_http::header::Quality\">Quality</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_http/struct.RequestHead.html\" title=\"struct actix_http::RequestHead\">RequestHead</a>"]],
"actix_multipart":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_multipart/form/tempfile/struct.TempFileConfig.html\" title=\"struct actix_multipart::form::tempfile::TempFileConfig\">TempFileConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_multipart/form/struct.MultipartFormConfig.html\" title=\"struct actix_multipart::form::MultipartFormConfig\">MultipartFormConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_multipart/form/text/struct.TextConfig.html\" title=\"struct actix_multipart::form::text::TextConfig\">TextConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_multipart/form/json/struct.JsonConfig.html\" title=\"struct actix_multipart::form::json::JsonConfig\">JsonConfig</a>"]],
"actix_router":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_router/struct.Url.html\" title=\"struct actix_router::Url\">Url</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_router/struct.Path.html\" title=\"struct actix_router::Path\">Path</a>&lt;T&gt;"]],
"actix_test":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_test/struct.TestServerConfig.html\" title=\"struct actix_test::TestServerConfig\">TestServerConfig</a>"]],
"actix_web":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/dev/struct.AppConfig.html\" title=\"struct actix_web::dev::AppConfig\">AppConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/test/struct.TestRequest.html\" title=\"struct actix_web::test::TestRequest\">TestRequest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.DefaultHeaders.html\" title=\"struct actix_web::middleware::DefaultHeaders\">DefaultHeaders</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.JsonConfig.html\" title=\"struct actix_web::web::JsonConfig\">JsonConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Compress.html\" title=\"struct actix_web::middleware::Compress\">Compress</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.NormalizePath.html\" title=\"struct actix_web::middleware::NormalizePath\">NormalizePath</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/dev/struct.ConnectionInfo.html\" title=\"struct actix_web::dev::ConnectionInfo\">ConnectionInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.FormConfig.html\" title=\"struct actix_web::web::FormConfig\">FormConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.PathConfig.html\" title=\"struct actix_web::web::PathConfig\">PathConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"actix_web/middleware/enum.TrailingSlash.html\" title=\"enum actix_web::middleware::TrailingSlash\">TrailingSlash</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.QueryConfig.html\" title=\"struct actix_web::web::QueryConfig\">QueryConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.PayloadConfig.html\" title=\"struct actix_web::web::PayloadConfig\">PayloadConfig</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/web/struct.Data.html\" title=\"struct actix_web::web::Data\">Data</a>&lt;T&gt;"],["impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.ErrorHandlers.html\" title=\"struct actix_web::middleware::ErrorHandlers\">ErrorHandlers</a>&lt;B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"actix_web/middleware/struct.Logger.html\" title=\"struct actix_web::middleware::Logger\">Logger</a>"]],
"awc":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/middleware/struct.Redirect.html\" title=\"struct awc::middleware::Redirect\">Redirect</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/struct.Client.html\" title=\"struct awc::Client\">Client</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"awc/test/struct.TestResponse.html\" title=\"struct awc::test::TestResponse\">TestResponse</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()