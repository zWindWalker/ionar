import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';
import { AuthService } from '../auth/providers/auth.service';
import { ProfileService } from './profile.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileFormGroup: FormGroup;

  changePassFormGroup: FormGroup;

  private _profileFormConfigs: ControlConfig[] = [
    {
      type: 'input',
      name: 'email',
      props: {
        label: 'Email'
      },
      validators: {
        required: true,
        email: true
      }

    },
    {
      type: 'input',
      name: 'name',
      props: {
        label: 'Name'
      }
    },
    {
      type: 'input',
      name: 'phone',
      props: {
        label: 'Mobile',
        type: 'phone'
      }
    }
  ];

  private _changePassFormConfigs: ControlConfig[] = [
    {
      type: 'input',
      name: 'current_password',
      props: {
        type: 'password',
        label: 'Current Password'
      },
      validators: {
        required: true
      }
    },
    {
      type: 'input',
      name: 'password',
      props: {
        type: 'password',
        label: 'New Password'
      },
      validators: {
        required: true,
        stringLength: {
          min: 6
        }
      }
    },
    {
      type: 'input',
      name: 'confirm_password',
      props: {
        type: 'password',
        label: 'Confirm Password'
      },
      validators: {
        required: true,
        equalTo: 'password'
      }
    }
  ];


  show_avatar_preview: Boolean = false;
  avatar_preview: any;

  show_hint: Boolean = false;
  show_payment_modal: Boolean = false;

  MONTHS = [
    {
      value: 1,
      label: 'January'
    },
    {
      value: 2,
      label: 'February'
    },
    {
      value: 3,
      label: 'March'
    },
    {
      value: 4,
      label: 'April'
    },
    {
      value: 5,
      label: 'May'
    },
    {
      value: 6,
      label: 'June'
    },
    {
      value: 7,
      label: 'July'
    },
    {
      value: 8,
      label: 'August'
    },
    {
      value: 9,
      label: 'September'
    },
    {
      value: 10,
      label: 'October'
    },
    {
      value: 11,
      label: 'November'
    },
    {
      value: 12,
      label: 'December'
    }
  ];

  YEARS = function() {

    const currentYear = new Date().getFullYear(), years = [];
    let startYear = 1800;

    while (startYear <= currentYear) {
      years.push({
        value: startYear,
        label: startYear
      });
      startYear++;
    }


    return years.reverse();
  }();

  constructor(
    private authSvs: AuthService,
    private profileSvs: ProfileService,
    private cd: ChangeDetectorRef,
    private _fb: IonarFormBuilder
  ) {
  }

  ngOnInit() {

    this.profileFormGroup = this._fb.group(this._profileFormConfigs, {
      nullExclusion: true
    });

    this.changePassFormGroup = this._fb.group(this._changePassFormConfigs);
  }


  onUploaded = file_list => {

    if (file_list.length > 0) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file_list[0]);
      reader.onload = () => {
        this.avatar_preview = reader.result;

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        this.show_avatar_preview = true;
      };
    }
  };

  cancelAvatarPreview = () => {
    this.avatar_preview = null;
    this.show_avatar_preview = false;
  };


  onSubmit = formValue => {
  }

};
