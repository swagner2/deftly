$(document).ready(function() {
  $('#signup-form').submit(function(event) {
    event.preventDefault(); // prevent form from submitting normally
    var email = $('input[name="email"]').val(); // get email value from input field
    var sendFoxApiUrl = 'https://api.sendfox.com/v1/contacts'; // SendFox API endpoint URL

    // make AJAX request to SendFox API
    $.ajax({
      type: 'POST',
      url: sendFoxApiUrl,
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlMjdlNjdiMjMyNWUzMjU2YzQwYTcwYmIwMDFhOWY3ODJlZmMxNDkzNTVhN2I3MzMwNDAwODIxMmI3OGUxNzI1OWI5M2RiNDk1ZTdjNzY4In0.eyJhdWQiOiI0IiwianRpIjoiYWUyN2U2N2IyMzI1ZTMyNTZjNDBhNzBiYjAwMWE5Zjc4MmVmYzE0OTM1NWE3YjczMzA0MDA4MjEyYjc4ZTE3MjU5YjkzZGI0OTVlN2M3NjgiLCJpYXQiOjE2ODAzMDAzOTIsIm5iZiI6MTY4MDMwMDM5MiwiZXhwIjoxNzExOTIyNzkyLCJzdWIiOiIxMDUzODUiLCJzY29wZXMiOltdfQ.euz4t_cG2HRrudbIA2sVjvaXWlE7XEd_KF8Mexmm1Z2ldbM7ZVV9Ekr5XHr1TZ0bKhIHqshZ3BQXU-YFBEWrOqICQdEx0f6Ai4LXWbSSRpgY7M7hnVUFKyCAwmoxhEE-fA826QpqMKst705VsxVR6Vg_94nxLYKjnVbNEE02HatMNr7GxtgX9r7V88WuiZKPTwnisOTy8gH0BGWdWwsLOEFDzpj02YAFTZ400vx-hJGUrprgYMHk84rg2WEqmr7Eews5_IiayytCBNFluguk8z3pD3WPjL4myFMy1YzPWWw9VRREGyCtwZeHDk9qapSm3EmYfDP4HTTtC2_AcPtEu_ytbAeeSyLUVtH5U-ngtQhjKKcd4QdJrBZ9H31-QonzPtmmhOnP2cEtWpdR9eEgwv8VNZFfcvAeAm7F9_HMeWW3tNgM_JpYoa1mKfkAHXeN_GK2Q83dFTjM4Xhc8E7dIAzLZkpDdWoVVrlWXBoF_rDz-nrSrg22BLqc1O1nQf5FZdLluyzuxasp_DJO80XylG4KHZY6jDM1qZxqmpwRXDwRKEZU6p9r6wz3oNYIJ2V7B3LVShYN0blRl2FbKEuInuxs5H2Rq0ibKCrQpSm0m_SmXuJeQ2b3HvsgiXC4Kti7uxunhma7ULvF3oBOg9YhXeWQGDxRy9pgkU-_qNfOmdo'
      },
      data: {
        'email': email,
        'tags': 'newsletter'
      },
      success: function(response) {
        $('#message').html('<p class="success">Thank you for subscribing!</p>');
        $('input[name="email"]').val('');
      },
      error: function(xhr, status, error) {
        $('#message').html('<p class="error">Oops! Something went wrong.</p>');
        console.log(xhr.responseText);
      }
    });
  });
});
