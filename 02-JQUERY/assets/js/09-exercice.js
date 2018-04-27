        function foo(data) {
            document.write("City: ", data.city);
            document.write("Country: ", data.country.name);
            document.write("Latitude: ", data.location.latitude);
            document.write("Longitude: ", data.location.longitude);
        }
        foo();