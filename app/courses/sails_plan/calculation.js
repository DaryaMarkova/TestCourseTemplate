(function() {
  let questionCount = 0;

  const questions$ = $('.next');
  let currentQuestion$ = questions$.eq(questionCount);
  
  $('.multiquestion-item-answer').hide();

  function init() {
    questions$.slice(1).hide();

    $('#to_questions').click(function() {
      const this$ = $(this);

      this$.fadeOut();
      this$.parent().find('.tooltip').fadeOut();
      this$.parent().find('.text').fadeOut();


      switchNextQuestion();
    });

    $('.show-answer').click(function() {
      currentQuestion$.find('.multiquestion-item-answer').slideDown(400);
    });

    questions$.find('input[type="checkbox"]').change(function() {
      setTimeout(() => {
        currentQuestion$.hide(); 
        switchNextQuestion()();
      }, 1000);
    })
  }

  function switchNextQuestion() {
    questions$.eq(questionCount).fadeIn(500);
    currentQuestion$ = questions$.eq(questionCount++);
  }

  init();
})();
