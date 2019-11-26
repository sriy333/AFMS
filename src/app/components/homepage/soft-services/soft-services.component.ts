import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-services',
  templateUrl: './soft-services.component.html',
  styleUrls: ['./soft-services.component.scss']
})
export class SoftServicesComponent implements OnInit {

  softService  = [{
      id :"HouseKeeping",
      href : "#"
    },
    {
      id :"Carpet Shampooing",
      href : "#"
    },
    {
      id :"Upholstery Cleaning",
      href : "#"
    },
    {
      id :"Horticulture & Landscaping",
      href : "#"
    },
    {
      id :"Pantry Services",
      href : "#"
    },
    {
      id :"Mail Room Services",
      href : "#"
    }
  ]

  operationsAndMaintenance = [{
      id :"Electrical Maintenance",
      href : "#"
    },
    {
      id :"DG Maintenance",
      href : "#"
    },
    {
      id :"HVAC",
      href : "#"
    },
    {
      id :"Plumbing, Carpentry & Civil Maintenance ",
      href : "#"
    },
    {
      id :"STP / WTP (Sewage Treatment Plant / Water Treatment plant)",
      href : "#"
    },
    {
      id :"Handyman",
      href : "#"
    }
]

  other = [
    {
      id :"Payroll Management",
      href : "#"
    },
    {
      id :"Reception / Helpdesk",
      href : "#"
    },
    {
      id :"Staffing Solutions",
      href : "#"
    },
    {
      id :"Pest Control Services",
      href : "#"
    },
    {
      id :"Guest House Management",
      href : "#"
    },
    {
      id :"Transport Management",
      href : "#"
    },
    {
      id :"Kitchen Stewarding",
      href : "#"
    },
    {
      id :"Floor Treatment",
      href : "#"
    },
    {
      id :"Laundry Services",
      href : "#"
    },
    {
      id :"Flower Supply",
      href : "#"
    },
    {
      id :"Tuck Shop",
      href : "#"
    },
    {
      id :"Vending Solutions",
      href : "#"
    },
    {
      id :"Corporate Packed Lunches (Meeting Room)",
      href : "#"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
