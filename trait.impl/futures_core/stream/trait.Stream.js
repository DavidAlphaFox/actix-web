(function() {var implementors = {
"actix_http":[["impl&lt;S&gt; Stream for <a class=\"enum\" href=\"actix_http/enum.Payload.html\" title=\"enum actix_http::Payload\">Payload</a>&lt;S&gt;<div class=\"where\">where\n    S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt;,</div>"],["impl Stream for <a class=\"struct\" href=\"actix_http/h1/struct.Payload.html\" title=\"struct actix_http::h1::Payload\">Payload</a>"],["impl Stream for <a class=\"struct\" href=\"actix_http/h2/struct.Payload.html\" title=\"struct actix_http::h2::Payload\">Payload</a>"],["impl&lt;S&gt; Stream for <a class=\"struct\" href=\"actix_http/encoding/struct.Decoder.html\" title=\"struct actix_http::encoding::Decoder\">Decoder</a>&lt;S&gt;<div class=\"where\">where\n    S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt;,</div>"]],
"actix_multipart":[["impl Stream for <a class=\"struct\" href=\"actix_multipart/struct.Field.html\" title=\"struct actix_multipart::Field\">Field</a>"],["impl Stream for <a class=\"struct\" href=\"actix_multipart/struct.Multipart.html\" title=\"struct actix_multipart::Multipart\">Multipart</a>"]],
"actix_web":[["impl&lt;T&gt; Stream for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a>,\n    T::<a class=\"associatedtype\" href=\"actix_web/trait.HttpMessage.html#associatedtype.Stream\" title=\"type actix_web::HttpMessage::Stream\">Stream</a>: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"actix_web/web/struct.Bytes.html\" title=\"struct actix_web::web::Bytes\">Bytes</a>, <a class=\"enum\" href=\"actix_web/error/enum.PayloadError.html\" title=\"enum actix_web::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl Stream for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>"]],
"awc":[["impl&lt;S&gt; Stream for <a class=\"struct\" href=\"awc/struct.ClientResponse.html\" title=\"struct awc::ClientResponse\">ClientResponse</a>&lt;S&gt;<div class=\"where\">where\n    S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()