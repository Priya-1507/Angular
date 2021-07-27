const URL = "https://covid19.mathdro.id/api";




let app = angular.module('MyApp', []);
app.controller('MyCtrl', ($scope, $http) => {
    //this is controller
    $scope.title = "Stay Home Stay Safe";

    $scope.changeValue = () => {
        

    }
    console.log("APP Loaded");

    //calling api

    $http.get(URL).then((Response) => {
        //success
        
        console.log(Response.data);

        $scope.all_data = Response.data;
    },
        (error) => {
            //error
            console.log(error);
        }
    );

    //get country data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == "") {
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
            .then((Response) => {
                console.log(Response.data);
                $scope.c_data = Response.data;
            
            },
                (error) => {
                    console.log(error);
                    
                }
            );
        
    };
});
