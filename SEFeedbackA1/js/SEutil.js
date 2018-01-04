/**
 * Created by Ruth&Sydney on 28-Feb-2016.
 */
//rules and messages for Add A FeedBack Page
function doValidate_frmAddFeedBack()
{
    var form = $("#SEAddForm");
    //our validation logic
    form.validate({
        rules:
        {
            txtName1:{
                required: true,
                minlength: 2
            },
            txtRevEmail1:
            {
                required: true,
                rangelength: [10,50]
            },
            txtRevDate1:
            {
                required: true,

            },

            valueNum1:
            {
                required: true,
                rangelength: [0,5]
            },

            valueNum2:
            {
                required: true,
                rangelength: [0,5]
            },

            valueNum:
            {
                required: true,
                rangelength: [0,5]
            }
        },

        //our messages
        messages:
        {
            txtName1:
            {
                required: "Please enter a Business Name",
                minlength: "Must be 2-30 characters long"
            },
            txtRevEmail1:
            {
                required: "Please Enter a valid Email Address",
                rangelength: "Email too short; must be 10-50 characters long"
            },
            txtRevDate1:
            {
                required: "Review date is required"
            },

            valueNum1:
            {
                required: "Value must be 0-5"
            },

            valueNum2:
            {
                required: "Value must be 0-5"
            },


            valueNum:
            {
                required: "Value must be 0-5"
            }

        }
    });

    // validation logic ends
    return form.valid();


    //rules and messages for Modify FeedBack Page
    function doValidate_frmAddFeedBack2()
    {
        var form = $("#SEAddForm2");
        //our validation logic
        form.validate
        ({
            rules:
            {
                bizName1:{
                    required: true,
                    minlength: 2
                },
                txtEmailList:
                {
                    required: true,
                    rangelength: [10,50]
                },
                txtRevDate2:
                {
                    required: true,

                },

                valueNum1a:
                {
                    required: true,
                    rangelength: [0,5]
                },

                valueNum3:
                {
                    required: true,
                    rangelength: [0,5]
                },

                valueNum4:
                {
                    required: true,
                    rangelength: [0,5]
                }
            },

            //our messages
            messages:
            {
                bizName1:
                {
                    required: "Please enter a Business Name",
                    minlength: "Must be 2-30 characters long"
                },
                txtEmailList:
                {
                    required: "Please Enter a valid Email Address",
                    rangelength: "Email too short; must be 10-50 characters long"
                },
                txtRevDate2:
                {
                    required: "Review date is required"
                },

                valueNum1a:
                {
                    required: "Value must be 0-5"
                },

                valueNum3:
                {
                    required: "Value must be 0-5"
                },


                valueNum4:
                {
                    required: "Value must be 0-5"
                }

            }
        });

        // validation logic ends
        return form.valid();

    }
}