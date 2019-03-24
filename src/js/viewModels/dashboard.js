/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','text!data/data.json', 'ojs/ojchart', 'ojs/ojselectcombobox', 
        'ojs/ojknockout', 'ojs/ojcomposite','ojs/ojaccordion', 'ojs/ojradioset','ojs/ojbutton','ojs/ojavatar',
        'ojs/ojvalidation','ojs/ojlabel','ojs/ojgauge', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata','promise',
        'ojs/ojlistview', 'ojs/ojtable', 'ojs/ojarraydataprovider', 'ojs/ojslider', 'ojs/ojnavigationlist',
        'ojs/ojradioset', 'ojs/ojswitch', 'ojs/ojcollectiontabledatasource', 'ojs/ojmodel', 'ojs/ojrefresher', 'ojs/ojprogress'
        , 'ojs/ojfilepicker', 'ojs/ojmenu', 'ojs/ojoption', 'ojs/ojconveyorbelt', 'ojs/ojbutton', 'ojs/ojtrain', 'ojs/ojtoolbar'
         , 'ojs/ojcolorpalette', 'ojs/ojcolor', 'ojs/ojvalidation-base', 'ojs/ojradioset'],
 function(oj, ko, $, file) {
  
    function DashboardViewModel() {
      var self = this;
      
                var data = JSON.parse(file);

                self.datasource = ko.observableArray(data);
                self.val = ko.observable("pie");

                self.firstName = 'Sherif';
                self.lastName = 'Alaa';
                self.initials = oj.IntlConverterUtils.getInitials(self.firstName, self.lastName);
                self.avatarSize = ko.observable("md");

                self.ratingValue2 = ko.observable(3);


                self.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2019, 0, 1)));

                var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300}];

                self.dataprovider = new oj.ArrayDataProvider(deptArray, {idAttribute: 'DepartmentId'});

                self.max = ko.observable(200);
                self.min = ko.observable(0);
                self.valuee = ko.observable(90);
                self.step = ko.observable(10);


                self.selectedItem = ko.observable("home");
                self.edge = ko.observable("top");
                
                self.progressValue = ko.observable(0);
                self.progressValue.subscribe(function(newValue) {
                    if(newValue == 100) {
                      $("#loadingRegion").text("Done!");
                      $("#loadingRegion").removeAttr("aria-busy");
                      $("#loadingRegion").removeAttr("aria-describedby");
                    }
                  });
                  window.setInterval(function() {
                    if (self.progressValue() !== -1)
                      self.progressValue(self.progressValue() + 1);
                  }, 30);
                  
                  
                self.multiple = ko.observableArray(['multiple']);
                self.multipleStr = ko.pureComputed(function () {
                    return self.multiple()[0] ? "multiple" : "single";
                }, self);
                
                self.acceptStr = ko.observable("image/*");
                self.acceptArr = ko.pureComputed(function () {
                    var accept = self.acceptStr();
                    return accept ? accept.split(",") : [];
                }, self);
               
                self.fileNames = ko.observableArray([]);

                self.selectListener = function (event) {
                  var files = event.detail.files;
                  for (var i = 0; i < files.length; i++) {
                    self.fileNames.push(files[i].name);
                  }
                };
                
                self.selectedMenuItem = ko.observable("");

                self.menuItemAction = function (event) {
                    self.selectedMenuItem(event.target.value);
                };

                document.getElementById('conveyorbelt-horizontal-example');
                
                    
                    this.selectedStepValue = ko.observable('stp1');
                    this.selectedStepLabel = ko.observable('Step One');
                    this.stepArray =
                            ko.observableArray(
                                    [{label: 'Step One', id: 'stp1'},
                                        {label: 'Step Two', id: 'stp2'},
                                        {label: 'Step Three', id: 'stp3'},
                                        {label: 'Step Four', id: 'stp4'},
                                        {label: 'Step Five', id: 'stp5'}]);
                    this.updateLabelText = function (event) {
                        var train = document.getElementById("train");
                        self.selectedStepLabel(train.getStep(event.detail.value).label);
                    };
                    document.getElementById('train-container');
              
                    self.drinkValues = [
                        {id: 'coffee', label: 'Coffee'},
                        {id: 'tea', label: 'Tea'},
                        {id: 'milk', label: 'Milk'},
                    ];

                    // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
                    self.someButtons = [
                        {id: 'Library', icon: 'demo-icon-font demo-library-icon-24'},
                        {id: 'Home', icon: 'demo-icon-font demo-home-icon-24'},
                        {id: 'Grid', icon: 'oj-fwk-icon-grid oj-fwk-icon'}
                    ];

                    self.toolbarClassNames = ko.observableArray([]);

                    self.toolbarClasses = ko.computed(function () {
                        return self.toolbarClassNames().join(" ");
                    }, self);
                

               
                self.currentValue = ko.observable(-20);
                self.max = ko.observable(100);
                self.min = ko.observable(-20);
                self.step = ko.observable(10);
               
                self.setMinAndMaxToNull = function ()
                {
                    self.min(null);
                    self.max(null);
                }
                
                self.currentColor = ko.observable("red");
                self.colorOptions = ko.observableArray([
                    {id: "blueopt", value: "blue", color: "Blue"},
                    {id: "greenopt", value: "green", color: "Green"},
                    {id: "redopt", value: "red", color: "Red"},
                    {id: "limeopt", value: "lime", color: "Lime"},
                    {id: "aquaopt", value: "aqua", color: "Aqua"}
                ]);
                
               



 
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
